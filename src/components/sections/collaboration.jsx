import React from "react";
import Section from "../section";
import { collabApps, collabContent, collabText } from "../../constants";
import { brainwave, brainwaveSymbol, check } from "../../assets";
import Button from "../button";
import { LeftCurve, RightCurve } from "../design/Collaboration"

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2">AI Chat App for seamless collaboration</h2>
          <ul className="max-w-[22rem] mb-10 md:mb-28">
            {collabContent.map((item) => (
              <li key={item.id} className="mb-3 py-3">
                <div className="flex items-center">
                  <img src={check} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button> Try it now</Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-4 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>
          <div className="relative flex w-[22rem] left-1/2 -translate-x-1/2 aspect-square border border-n-6 rounded-full scale-75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square p-[0.2rem] m-auto bg-conic-gradient rounded-full">
                <div className="flex justify-center items-center w-full h-full bg-n-8 rounded-full">
                  <img src={brainwaveSymbol} alt="synthwave" />
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((item, index) => (
                <li
                  key={item.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div className={`relative -top-[1.125rem] flex w-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45}`}>
                    <img
                      src={item.icon}
                      alt=""
                      className="m-auto"
                      width={item.width}
                      height={item.height}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
