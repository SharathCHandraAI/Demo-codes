/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Form, FormInstance, InputNumber } from "antd";
import { Loader } from "lucide-react";
import { SelectInput } from "./select";
import {
  sexOptions,
  chestPainTypeOptions,
  ekgResultOptions,
  exerciseAnginaOptions,
  fbsOptions,
  slopeStOptions,
  thalliumOptions,
} from "../utils/constants";
interface PredictionFormProps {
  onFinish: (values: any) => void;
  onFinishFailed: (values: any) => void;
  isLoading: boolean;
  formInstance: FormInstance<any>;
  setGeneralOptions: (values: any) => void;
}

type FieldType = {
  age: number;
  blood_pressure: number;
  cholesterol: number;
  max_heart_rate: number;
  st_depression: number;
  num_vessels_fluro: number;
};

type PredictionInput = {
  label: string;
  name: keyof FieldType; // Use keyof FieldType here
};

const predictionInputs: PredictionInput[] = [
  { label: "Age", name: "age" },
  { label: "Blood Pressure", name: "blood_pressure" },
  { label: "Cholesterol", name: "cholesterol" },
  { label: "Max Heart Rate", name: "max_heart_rate" },
  { label: "ST Depression", name: "st_depression" },
  { label: "Num Vessels Fluro", name: "num_vessels_fluro" },
];

const selectInputs = [
  {
    name: "sex",
    options: sexOptions,
    label: "Sex",
  },

  {
    name: "chest_pain_type",
    options: chestPainTypeOptions,
    label: "Chest Pain Type",
  },
  {
    name: "fbs_over_20",
    options: fbsOptions,
    label: "FBS",
  },
  {
    name: "ekg_results",
    options: ekgResultOptions,
    label: "EKG",
  },
  {
    name: "exercise_angina",
    options: exerciseAnginaOptions,
    label: "Exercise Angina",
  },
  {
    name: "slope_of_st",
    options: slopeStOptions,
    label: "Slope of St",
  },
  {
    name: "thallium",
    options: thalliumOptions,
    label: "Thallium",
  },
];

const PredictionForm: React.FC<PredictionFormProps> = ({
  onFinish,
  onFinishFailed,
  isLoading,
  formInstance,
  setGeneralOptions,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setGeneralOptions((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Form
      onFinish={onFinish}
      form={formInstance}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="grid grid-cols-1  sm:grid-cols-2   lg:grid-cols-3  xl:grid-cols-4 gap-4"
      layout="vertical"
    >
      {predictionInputs.map((item) => (
        <Form.Item<FieldType>
          label={item.label}
          key={item.name}
          name={item.name}
          rules={[
            { required: true, message: `Please input your ${item.label}` },
          ]}
        >
          <InputNumber className="w-[300px] border-neutral-300 border-2 py-2" />
        </Form.Item>
      ))}
      {selectInputs.map((item) => (
        <div className="flex flex-col gap-3">
          <div className="text-black">{item.label}</div>
          <SelectInput
            key={item.name}
            handleChange={handleChange}
            name={item.name}
            options={item.options}
          />
        </div>
      ))}
      <Form.Item>
        <button
          disabled={isLoading}
          className=" bg-indigo-600 mt-8  px-3 py-2 text-white rounded-md"
        >
          {isLoading ? (
            <Loader className="h-5 w-5 text-center animate-spin" />
          ) : (
            "Predict"
          )}
        </button>
      </Form.Item>
    </Form>
  );
};

export default PredictionForm;
