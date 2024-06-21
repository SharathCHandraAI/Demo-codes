import React from "react";

type Options = {
  label: string;
  value: string;
};

interface SelectProps {
  options: Options[];
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectInput: React.FC<SelectProps> = ({
  options,
  name,
  handleChange,
}) => {
  return (
    <select
      className="border-2 border-neutral-300  py-2 outline-none  rounded-md w-[300px]"
      title={name}
      name={name}
      onChange={handleChange}
    >
      {options.map((item, idx) => (
        <option className="text-neutral-400" key={idx} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};
