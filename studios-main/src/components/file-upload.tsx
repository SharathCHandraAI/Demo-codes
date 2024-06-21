import axios from "axios";
import { Loader, Paperclip, Upload, X } from "lucide-react";
import React, { useState } from "react";
import { CovidStateProps } from "../pages/covid";
import { toast } from "react-toastify";

interface FileUploadProps {
  apiEndPath: string;
  setResult?: (data: CovidStateProps) => void;
  type?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  apiEndPath,
  setResult,
  type,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  // const [fileType, setfileType] = useState(second)
  const BASE_URL = "http://localhost:8000";

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }
    setFile(event.target.files[0]);
  };
  console.log(file);
  const handleUpload = async () => {
    if (!file) {
      console.error("No file selected");
      return;
    }

    if (type === "parser") {
      try {
        setIsLoading(true);
        const formData = new FormData();
        formData.append("file", file);

        const response = await axios.post(
          `${BASE_URL}/${apiEndPath}`,
          formData,
          {
            responseType: "blob",
          }
        );

        if (response.status === 200) {
          const blob = new Blob([response.data], {
            type: "application/octet-stream",
          });
          const url = window.URL.createObjectURL(blob);

          // Create a link element
          const link = document.createElement("a");
          link.href = url;
          link.download = "downloaded_excel_file.xlsx"; // Set the desired file name

          // Append the link to the document
          document.body.appendChild(link);

          // Trigger a click on the link to initiate the download
          link.click();

          // Remove the link from the document
          document.body.removeChild(link);

          // Release the blob URL
          window.URL.revokeObjectURL(url);
          setFile(null);
          toast.success("File Successfully Uploaded");
        } else {
          console.error(
            "File upload and download failed:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error during file upload and download:", error);
      } finally {
        setIsLoading(false);
      }
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    try {
      setIsLoading(true);
      const { data } = await axios.post(`${BASE_URL}/${apiEndPath}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (data && setResult) {
        setResult(data);
        toast.success("Image Uploaded Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setFile(null);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full  flex flex-col space-y-5 items-center justify-center">
      {type !== "parser" && (
        <div className="w-[700px] border-dotted overflow-hidden isolate rounded-md border-zinc-500 border-2 h-[300px] justify-center items-center flex bg-zinc-200 relative">
          {!file && (
            <div className="flex items-center gap-3">
              <label htmlFor="file2">
                <Upload className="w-10 h-10 text-neutral-400 cursor-pointer" />
              </label>
              <input
                type="file"
                id="file2"
                title="file"
                className="w-0 h-0"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
          )}
          {file && (
            <>
              <div
                className="absolute z-20 right-0 top-0 bg-zinc-400 rounded-full cursor-pointer "
                onClick={() => setFile(null)}
              >
                <X className="w-5 h-5 text-indigo-500" />
              </div>
              <div className="absolute">
                <img
                  alt="image"
                  src={URL.createObjectURL(file)}
                  className="object-cover w-full h-full"
                />
              </div>
            </>
          )}
        </div>
      )}
      {type === "parser" && !file && (
        <div className="bg-zinc-300 rounded-lg p-4 w-[70%] flex justify-end">
          <label
            htmlFor="file"
            className="bg-indigo-600 text-white cursor-pointer py-2 rounded-lg  px-6"
          >
            Select File
          </label>
          <input
            type="file"
            id="file"
            className="w-0 h-0"
            accept=".837"
            onChange={handleFileChange}
          />
        </div>
      )}

      {file && type === "parser" && (
        <div className="flex items-center gap-4">
          <Paperclip color="#4262ae" />
          <span className="text-sm text-indigo-600">{file.name}</span>
          <div className="bg-zinc-200 p-2 rounded-full group ">
            <X
              color="#4262ae"
              onClick={() => setFile(null)}
              className="w-5 h-5 cursor-pointer  rounded-full group-hover:text-indigo-800 transition"
            />
          </div>
        </div>
      )}

      {file && (
        <button
          onClick={handleUpload}
          disabled={isLoading}
          className="px-6 py-2 disabled:cursor-not-allowed text-base bg-indigo-600 text-neutral-100 rounded-md hover:bg-indigo-500 transition"
        >
          {isLoading ? (
            <Loader className="h-5 w-5 text-center animate-spin" />
          ) : (
            "Upload"
          )}
        </button>
      )}
    </div>
  );
};

export default FileUpload;
