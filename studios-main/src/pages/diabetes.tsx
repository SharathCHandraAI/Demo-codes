import { useState } from "react";
import Header from "../components/header";
import { CovidStateProps } from "./covid";
import FileUpload from "../components/file-upload";
import ResultBox from "../components/result-box";

const Diabetes = () => {
  const [diabetesResult, setDiabetesResult] = useState<CovidStateProps>();

  return (
    <div className="flex flex-col  space-y-4">
      <Header
        title="Diabetes Analyzer"
        description="Upload images to find wether you have diabetes or not"
      />
      <FileUpload setResult={setDiabetesResult} apiEndPath="DRuploadfile" />
      {diabetesResult && <ResultBox result={diabetesResult} />}
    </div>
  );
};

export default Diabetes;
