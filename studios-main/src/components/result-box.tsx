import React from "react";
import { CovidStateProps } from "../pages/covid";
import { giveBase64Src } from "../utils/constants";
import Label from "./label";

interface ResultBoxProps {
  result: CovidStateProps;
}
const ResultBox: React.FC<ResultBoxProps> = ({ result }) => {
  return (
    <div className="flex flex-col  shadow-md border-neutral-300 rounded-xl my-9 border-2 max-w-5xl m-auto">
      <div className="flex items-center gap-3 m-auto  mt-11">
        Detection Type - <Label title={result.Detection} />
      </div>
      <div className="m-auto">
        <img
          className="w-full  h-full"
          alt="base-64-string"
          src={giveBase64Src(result.image)}
        />
      </div>
    </div>
  );
};

export default ResultBox;
