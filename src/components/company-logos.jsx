import React from "react";
import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1">
        Helping people create beautiful content at
      </h5>
      <ul className="flex justify-center items-center flex-1 h-[8.5rem] gap-20 xl:gap-36">
        {companyLogos.map((item, index) => (
          <li key={index}>
            <img src={item} width={134} height={28} alt={index} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
