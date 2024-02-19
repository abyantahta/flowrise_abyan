import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/Bounded";
import Heading from "@/app/components/Heading";
import { createClient } from "@/prismicio";
/**
 * Props for `Testimonials`.
 */

const components : JSXMapSerializer = {
  heading2 : ({children})=> (
    <Heading as='h2' size = "md" className="text-center mb-8 md:mb-12 mx-auto">
      {children}
    </Heading>
  ),
  paragraph : ({children})=>(
    <p className="text-base font-medium font-body text-slate-600 word-break text-justify overflow-x-hidden">
      {children}
    </p>
  )
}
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = async({ slice }: TestimonialsProps): Promise<JSX.Element> => {
  
  const client = createClient();
  const testimonials = await Promise.all(
    slice.items.map((item)=>{
      if(
        isFilled.contentRelationship(item.testimonial) && item.testimonial.uid
      ){
        return client.getByUID('testimonial',item.testimonial.uid)
      }
    })
  )
  
  // console.log('ini testi',testimonials)
  
  // console.log('ini adalah ',slice.items[0])
  return (
    <Bounded as='section'
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
    <PrismicRichText components={components} field={slice.primary.heading} />
    <div className=" justify-center flex flex-col md:flex-row md:gap-y-4 gap-2 ">
    {
      testimonials.map((item=>(
        <div key={item?.id} className="bg-slate-100 w-full md:w-1/4 p-4 border">
          <PrismicRichText field={item?.data.quote} components={components} />
          <div className="flex gap-4 mt-3 items-center">
            <PrismicNextImage field={item?.data.avatar} imgixParams={{ar:'1:1', fit: 'crop'}} className="w-10 h-10 rounded-3xl"/>
            <div className="flex flex-col">
              <p className="font-body text-sm">{item?.data.name}</p>
              <p className="font-thin text-sm">{item?.data.job_title}</p>
            </div>
          </div>
        </div>
      )))
    }
    </div>
    </Bounded>
  );
};

export default Testimonials;
