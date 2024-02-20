import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/Bounded";
import Heading from "@/app/components/Heading";
import Button from "@/app/components/Button";
import { PrismicNextLink } from "@prismicio/next";


const components : JSXMapSerializer = {
  heading2 : ({children})=> (
    <Heading as='h2' size = "md" className="text-center mb-4 md:mb-4 mx-auto font-semibold">
      {children}
    </Heading>
  ),
  paragraph : ({children})=>(
    <p className=" font-normal font-body text-slate-600 text-xl word-break text-justify overflow-x-hidden ">
      {children}
    </p>
  )
}
/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  return (
    <Bounded as='section'
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
    <div className="flex items-center flex-col w-2/3 mx-auto bg-gradient-to-tr from-cyan-50 to bg-emerald-50 shadow-md p-4">
      <PrismicRichText components={components} field={slice.primary.heading} />
      <PrismicRichText components={components} field={slice.primary.description} />
      <Button field={slice.primary.button_link} className="font-semibold md:mt-8">{slice.primary.button_text}</Button>
    </div>
    </Bounded>
  );
};

export default CallToAction;
