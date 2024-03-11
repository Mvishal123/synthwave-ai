import React from "react";
import Section from "../section";
import { socials } from "../../constants";

const Footer = () => {
  return (
    <Section className="!px-0 !py-10" crosses={true}>
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 block">
          &copy; {new Date().getFullYear()} All rights reserved
        </p>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item, index) => (
            <a key={item.id} href={item.url} target="_blank" className="flex items-center justify-center bg-n-7 rounded-full transition-colors hover:bg-n-8">
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
