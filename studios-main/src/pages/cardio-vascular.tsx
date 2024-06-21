import { useState } from "react";
import PredictionForm from "../components/prediction-form";
import { toast } from "react-toastify";
import axios from "axios";
import {
  BASE_URL,
  chestPainTypeOptions,
  ekgResultOptions,
  exerciseAnginaOptions,
  fbsOptions,
  sexOptions,
  slopeStOptions,
  thalliumOptions,
} from "../utils/constants";
import { Form, Tag } from "antd";
import Header from "../components/header";
export interface generalOptionsState {
  chest_pain_type: string;
  fbs_over_120: string;
  ekg_results: string;
  exercise_angina: string;
  slope_of_st: string;
  thallium: string;
  sex: string;
}
const CardioVascular = () => {
  const [isLoading, setisLoading] = useState(false);
  const [prediction, setPrediction] = useState("");
  const [generalOptions, setGeneralOptions] = useState<generalOptionsState>({
    chest_pain_type: chestPainTypeOptions[0].value,
    fbs_over_120: fbsOptions[0].value,
    ekg_results: ekgResultOptions[0].value,
    exercise_angina: exerciseAnginaOptions[0].value,
    slope_of_st: slopeStOptions[0].value,
    thallium: thalliumOptions[0].value,
    sex: sexOptions[0].value,
  });
  const [form] = Form.useForm();
  const onFinish = async (values: any) => {
    try {
      setisLoading(true);
      const input = {
        ...generalOptions,
        ...values,
      };
      const { data } = await axios.post(
        `${BASE_URL}/predict_heart_disease`,
        input
      );
      if (data.prediction) {
        form.resetFields();
        toast.success("Prediction Successful");
        setPrediction(data.prediction);
      }
    } catch (error) {
      toast.error("Something Went Wrong");
    } finally {
      setisLoading(false);
    }
  };
  const onFinishFailed = (values: any) => {
    console.log(values);
  };
  return (
    <div className="p-5 w-full">
      <div className="max-w-7xl m-auto flex flex-col space-y-11">
        <Header
          title="Cardio Vascular Disease Predictor"
          description="Fill out the form to know wether you have cardio vascular disease"
        />
        <PredictionForm
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          isLoading={isLoading}
          formInstance={form}
          setGeneralOptions={setGeneralOptions}
        />
        {prediction && (
          <div className="p-4 bg-slate-200 flex items-center gap-4 ">
            <Tag color="green" className="text-base">
              {prediction}
            </Tag>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardioVascular;
