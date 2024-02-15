import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/Bounded";
import Button from "@/app/components/Button";
import Heading from "@/app/components/Heading";






const components: JSXMapSerializer = {}
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded as = "section"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex items-center flex-col bg-slate-300 ">
        <PrismicRichText field={slice.primary.heading} components={{
          heading1: ({children})=>(
            <Heading as="h1" size="xl" className="md:mb-8 mb-4 mt-12 first:mt-0 last:mb-0">{children}
            </Heading>
          )
        }} />
        <PrismicRichText field={slice.primary.body} components={{
          paragraph: ({children}) =>(
            <p className="text-2xl text-center font-normal leading-10 font-body text-slate-600 mb-4 max-w-2xl">{children}</p>
          )
        }} />
        <Button field={slice.primary.button_link} className="">
        {slice.primary.button_text}
        </Button>
        <PrismicNextImage field={slice.primary.image} className="drop-shadow-md max-w-4xl w-full mt-12"/>
      </div>
    </Bounded>
  );
};

export default Hero;
