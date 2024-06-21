import FileUpload from "../components/file-upload";
import Header from "../components/header";

const Parser = () => {
  return (
    <div className="p-4">
      <div className=" flex flex-col space-y-10">
        <Header
          title="837 File Parser"
          description="Parse your 837 file and get insightful results in form of excel"
        />
        <FileUpload apiEndPath="Parserupload" type="parser" />
      </div>
    </div>
  );
};

export default Parser;
