import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";

const SmallHomeOptions = ({ Icon, title, index, handleSelection }) => {
  return (
    <div
      className="flex items-center justify-between py-[14px] px-[24px] border-b-[1px] border--b-[#d9e1ee] w-full hover:cursor-pointer hover:bg-gray-100"
      onClick={() => handleSelection(index)}
    >
      <div className="flex items-center space-x-6">
        <Icon className="h-[24px] w-[24px] text-[#c0c8ce]" />
        <span className="text-[#333] text-[14px] font-lato">{title}</span>
      </div>
      <div>
        <ChevronRightIcon className="text-[#181818] h-[12px] w-[12px]" />
      </div>
    </div>
  );
};

export default SmallHomeOptions;
