import React from "react";
import Section from "../section";
import { smallSphere, stars } from "../../assets";
import Heading from "../heading";
import PriceList from "../price-list";
import { LeftLine, RightLine } from "../design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="relative z-2 container flex flex-col items-center">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={250}
            height={250}
            alt="sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              alt="stars"
              className="w-full"
              width={950}
              height={400}
            />
          </div>
        </div>
        <Heading
          className=""
          tag="Get started with Synthwave.ai"
          title="Pay once, use forver"
        />
      </div>

      <div className="relative container">
        <LeftLine />
        <PriceList />
        <RightLine />
      </div>
      <div className="flex justify-center mt-10">
        <a href="/pricing" className="text-xs font-code font-bold border-b tracking-wider uppercase">See the full details</a>
      </div>
    </Section>
  );
};

export default Pricing;
