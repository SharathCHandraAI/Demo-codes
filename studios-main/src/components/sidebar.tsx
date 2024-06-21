import React, { useCallback, useContext } from "react";
import type { MenuProps } from "antd";
import { Drawer, Menu } from "antd";
import { Bot, HeartHandshake } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SideBarContext } from "../context/SidebarContext";

type MenuItem = Required<MenuProps>["items"][number];

const Sidebar = () => {
  const navigate = useNavigate();
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e.key);
    navigate(e.key);
  };
  const getItem = useCallback(
    (
      label: React.ReactNode,
      key: React.Key,
      icon?: React.ReactNode,
      children?: MenuItem[],
      type?: "group"
    ): MenuItem => {
      return {
        key,
        icon,
        children,
        label,
        type,
      } as MenuItem;
    },
    []
  );
  const items: MenuProps["items"] = [
    getItem("AI Studio", "sub1", <Bot className="h-5 w-5 " />, [
      getItem(
        "LLM",
        "g1",
        null,
        [getItem("Bizz Buddy", "/biz-buddy"), getItem("Biz On", "/biz-on")],
        "group"
      ),
      getItem(
        "Speech",
        "g2",
        null,
        [
          getItem("Feature Extracts", "3"),
          getItem("Propensity To Engange", "4"),
        ],
        "group"
      ),
      getItem(
        "Data Standardization",
        "g3",
        null,
        [
          getItem("Inucide Standardization", "5"),
          getItem("837 Extraction", "6"),
        ],
        "group"
      ),
    ]),
    getItem("Health Studio", "sub2", <HeartHandshake className="h-5 w-5 " />, [
      getItem(
        "Tele Radiology",
        "g4",
        null,
        [
          getItem("Covid", "/covid"),
          getItem("Diabetes Retinopashy", "/diabetes"),
        ],
        "group"
      ),
      getItem(
        "Disease Predection",
        "g8989",
        null,
        [getItem("Cardio Vascular Disease", "/cardio-vascular")],
        "group"
      ),
      getItem(
        "PHM",
        "g5",
        null,
        [
          getItem("Risk", "/risk"),
          getItem("Utilization Studio", "8"),
          getItem("Care Journey", "/care-journey"),
          getItem("Referral Generation", "10"),
        ],
        "group"
      ),
      getItem(
        "Claims",
        "g6",
        null,
        [getItem("837 Parser", "837-parser"), getItem("Fraud Risk", "12")],
        "group"
      ),
    ]),
  ];

  const { isOpen, onClose } = useContext(SideBarContext);

  return (
    <Drawer placement="left" onClose={onClose} open={isOpen}>
      <Menu
        onClick={onClick}
        className="w-full h-full bg-transparent border-none"
        defaultSelectedKeys={["/covid"]}
        defaultOpenKeys={["sub2"]}
        mode="inline"
        items={items}
      />
    </Drawer>
  );
};

export default Sidebar;
