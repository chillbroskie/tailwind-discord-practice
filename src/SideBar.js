import React from "react";
import { BsFillLightningFill, BsPlus } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="top-0 left-0 flex flex-col w-16 h-screen m-0 shadow-lg Fixed bg-primary text-secondary">
      <SideBarIcon icon={<FaFire size="28" />} />
      <SideBarIcon icon={<BsPlus size="28" />} />
      <SideBarIcon icon={<FaPoo size="28" />} />
      <SideBarIcon icon={<BsFillLightningFill size="28" />} />
    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip  " }) => (
  <div className="sidebar-icon group">
    {icon}

    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default SideBar;
