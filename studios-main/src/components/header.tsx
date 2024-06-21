import React from "react";

interface HeaderProps {
  title: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({ description, title }) => {
  return (
    <div className="flex flex-col text-center m-auto bg-zinc-200 p-3 max-w-3xl">
      <h1 className="text-neutral-700 font-bold text-base">{title}</h1>
      <p className="text-sm text-neutral-500">{description}</p>
    </div>
  );
};

export default Header;
