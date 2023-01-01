import React from "react";

const SidebarOptions = ({ selected, handleSelection, index, Icon, title }) => {
  return (
    <div
      className={`${
        selected ? "bg-blue-100" : "hover:bg-gray-100"
      } flex items-center space-x-4 rounded-md p-3 hover:cursor-pointer transition-all duration-150 ease-in-out`}
      onClick={() => handleSelection(index)}
    >
      <Icon
        className={`${
          selected ? "text-blue-600" : "text-gray-400"
        } h-[17px] w-[17px]`}
      />
      <span
        className={`${
          selected ? "font-semibold" : "font-normal"
        } text-[14px] text-[#333] leading-[1.7] font-lato`}
      >
        {title}
      </span>
    </div>
  );
};

export default SidebarOptions;
