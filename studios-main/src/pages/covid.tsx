import { useState } from "react";
import Header from "../components/header";
import FileUpload from "../components/file-upload";
import ResultBox from "../components/result-box";

export interface CovidStateProps {
  fileName: string;
  Detection: string;
  image: string;
}

const Covid = () => {
  const [covidResult, setCovidResult] = useState<CovidStateProps>();
  return (
    <div className="flex flex-col  space-y-4">
      <Header
        title="Covid Analyzer"
        description="Upload images to find wether you have covid or not"
      />
      <FileUpload setResult={setCovidResult} apiEndPath="Coviduploadfile" />
      {covidResult && <ResultBox result={covidResult} />}
    </div>
  );
};

export default Covid;
