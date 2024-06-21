import { Tag } from "antd";
import React from "react";

interface LabelProps {
  title: string;
}
const Label: React.FC<LabelProps> = ({ title }) => {
  return <Tag color="magenta">{title}</Tag>;
};

export default Label;
