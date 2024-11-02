import {SectionTwoData} from "@/HypnoticData";
import React from "react";

const ThirdSection = () => {
  return (
    <div>
      {SectionTwoData.map((item, i) => (
        <div key={i}>{item.title}</div>
      ))}
    </div>
  );
};

export default ThirdSection;
