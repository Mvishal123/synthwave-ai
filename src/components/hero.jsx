import { curve, heroBackground, robot } from "../assets";
import Button from "./button";
import Section from "./section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className={`pt-[12rem] -mt-[5.25rem]`}
      crosess      
      crossesOffset={"lg:translate-y-[5.35rem]"}
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilities of AI Chatting with {""}
            <span className="relative inline-block">
              Brainwave
              <img
                src={curve}
                alt="curve"
                className="absolute top-full inset-0 xl:mt-2"
                width={624}
                height={28}
              />
            </span>
          </h1>
          <p className="text-n-2 mb-6 lg:mb-8 mt-4 lg:mt-8">
            Unleash the power of AI with with Synthwave. Upgrade your
            productivity with Synthwave, the open-ai chat app
          </p>
          <Button white href={"/pricing"}>
            Get started
          </Button>
        </div>
        <div className="relative max-w-[23rem] md:max-w-5xl mx-auto xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.65rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  alt="AI"
                  className="w-full scale-[1.7] -translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-[22%]"
                  height={490}
                  width={1024}
                />
              </div>
              <ScrollParallax isAbsolutelyPositioned zIndex={1}>
                <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] bg-n-9/40 px-1 py-3 backdrop-blur border border-n-1/10 rounded-xl xl:flex justify-center items-center">
                  {Array(4)
                    .fill(null)
                    .map((_, index) => (
                      <li className="mx-4">{index}</li>
                    ))}
                </ul>
              </ScrollParallax>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[60%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              alt="hero"
              className="w-full overflow-hidden"
              width={1440}
              height={1800}
            />
          </div>
          <BackgroundCircles parallaxRef={parallaxRef} />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
