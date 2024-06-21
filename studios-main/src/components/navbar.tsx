// import React, { useCallback } from "react";
import { useContext } from "react";
import { Menu } from "lucide-react";
import { SideBarContext } from "../context/SidebarContext";
import logo from "../../src/assets/logo.jpeg";

const Navbar = () => {
  const { onOpen } = useContext(SideBarContext);

  return (
    <div className="w-full p-3 border-b-2 border-zinc-200 mb-10">
      <div className="max-w-7xl flex items-center justify-between m-auto">
        <Menu
          className="w-7 h-7  transition rounded-full text-zinc-600 cursor-pointer"
          onClick={onOpen}
        />
        <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
      </div>
    </div>
  );
};

export default Navbar;
