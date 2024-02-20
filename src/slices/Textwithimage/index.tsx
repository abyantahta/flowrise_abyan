import Bounded from "@/app/components/Bounded";
import Heading from "@/app/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";

const components : JSXMapSerializer = {
  heading2 : ({children})=> (
    <Heading as='h2' size = "md" className=" mb-3 md:mb-6 mx-auto leading-tight  w-3/4 font-body mt-6 md:mt-0 text-left">
      {children}
    </Heading>
  ),
  paragraph : ({children})=>(
    <p className="w-3/4 mx-auto text-justify text-2xl text-slate-700">
      {children}
    </p>
  )
}
/**
 * Props for `Textwithimage`.
 */
export type TextwithimageProps =
  SliceComponentProps<Content.TextwithimageSlice>;

/**
 * Component for "Textwithimage" Slices.
 */
const Textwithimage = ({ slice }: TextwithimageProps): JSX.Element => {
  return (
    <Bounded as="section"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={slice.variation=='reverse'? "flex items-center md:flex-row-reverse flex-col justify-center gap-4": "flex items-center md:flex-row flex-col justify-center gap-4"}>
        <PrismicNextImage field={slice.primary.image} className="w-4/5 md:w-1/3 " />
        <div className="md:w-1/2 w-4/5">
          <PrismicRichText components={components} field={slice.primary.heading} />
          <PrismicRichText components={components} field={slice.primary.description} />
        </div>
      </div>
    </Bounded>
  );
};

export default Textwithimage;
