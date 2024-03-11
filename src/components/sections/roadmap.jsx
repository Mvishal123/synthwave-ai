import React from "react";
import Section from "../section";
import Heading from "../heading";
import { roadmap } from "../../constants";
import { check2, grid, loading1 } from "../../assets";
import Tagline from "../tagline";

const Roadmap = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container">
        <div className="">
          <div className="flex flex-col items-center mb-8 md:mb-12">
            <Heading
              title="What we're looking at?"
              tag="Ready to get started"
              tagCenter="justify-center"
            />
          </div>
          <div className="relative z-1 grid md:grid-cols-2 gap-10 md:px-20">
            {roadmap.map((item, index) => {
              const status = item.status === "done" ? "done" : "pending";
              return (
                <div
                  className={`${
                    item.colorful ? "bg-conic-gradient" : "bg-n-5"
                  } p-0.5 rounded-[2rem] even:md:translate-y-20 `}
                >
                  <div className={`relative bg-n-8 h-full rounded-[2rem]`}>
                    <div className="absolute">
                      <img src={grid} alt="grid" className="w-full" />
                    </div>

                    <div className="top-0 flex flex-col">
                      <div className="flex justify-between px-6 md:px-10 pt-6">
                        <Tagline className="items-center">{item.date}</Tagline>
                        <div>
                          <div className="bg-n-1/90 flex items-center gap-3 p-2 rounded">
                            <img
                              src={status === "done" ? check2 : loading1}
                              alt={status}
                              className="w-full"
                              height={15}
                              width={15}
                            />
                            <p className="text-xs text-n-6 body-2">{status}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <img src={item.imageUrl} alt="" className="w-full" />
                      </div>

                      <div className="px-4 md:px-6">
                        <Heading title={item.title} text={item.text} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
