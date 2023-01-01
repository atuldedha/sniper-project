import { ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import React from "react";
import { personalData } from "../AppointmentCard/staticData";

const AccountSettings = ({ handleBackClick }) => {
  return (
    <div className="lg:shadow-md lg:rounded-[4px] flex flex-col lg:px-[32px] lg:pt-[32px] lg:pb-[48px] lg:mx-[24px] lg:w-[668px] lg:border lg:border-[#f6f7fc]">
      <div className="flex items-center py-[12px] px-[16px] lg:hidden">
        <ChevronLeftIcon
          className="h-[20px] w-[20px] text-[#181818] mr-[14px]"
          onClick={handleBackClick}
        />
        <span className="font-bold font-lato text-[20px] leading-[1.4] text-[#181818]">
          Account Settings
        </span>
      </div>
      <div className="hidden lg:flex-col lg:flex">
        <span className="text-[20px] font-lato font-bold leading-[1.4]">
          Account Settings
        </span>
      </div>

      <div className="flex flex-col items-center mt-[30px] pt-[30px] px-[16px]">
        <div className="flex flex-col items-start  max-w-[400px] w-full">
          <span className="text-[#8495b1] lg:mb-[24px] font-lato font-normal">
            Your Details
          </span>
          <div className="relative w-full">
            <span className="absolute top-2 left-4 text-xs font-lato font-normal text-[#666]">
              Your name
            </span>
            <input
              type="text"
              value={personalData.name}
              className="w-full rounded-[12px] border border-[#dbdbdb] px-[16px] pt-[22px] pb-[5px] mb-[24px] text-[16px] font-lato font-normal text-[#181818] hover:border-blue-400 transition-all duration-200 ease-in-out focus:border-blue-400"
            />
          </div>

          <div className="flex items-center mb-[24px] w-full space-x-2">
            <div className="flex items-center border w-[135px] border-[#dbdbdb] space-x-2 rounded-[12px] px-[16px] py-[13px]">
              <img
                src="https://cdn-icons-png.flaticon.com/512/197/197374.png"
                alt="flag"
                className="h-[12px] w-[12px] object-contain rounded-full"
              />
              <span className="font-lato font-normal texxt-[#181818] text-sm lg:text-base">
                +91
              </span>
              <ChevronDownIcon className="lg:h-[16px] lg:w-[16px] w-[10px]  h-[10px]" />
            </div>
            <div className="relative w-full">
              <span className="absolute top-2 left-4 text-xs font-lato font-normal text-[#666]">
                Your phone
              </span>
              <input
                type="text"
                value={personalData.phone}
                className="w-full rounded-[12px] border border-[#dbdbdb] px-[16px] pt-[22px] pb-[5px] outline-none text-[16px] font-lato font-normal text-[#181818] hover:border-blue-400 transition-all duration-200 ease-in-out focus:border-blue-400"
              />
            </div>
          </div>

          <div className="relative w-full">
            <span className="absolute top-2 left-4 text-xs font-lato font-normal text-[#666]">
              Email
            </span>
            <input
              type="text"
              value={personalData.email}
              className="w-full rounded-[12px] border border-[#dbdbdb] px-[16px] pt-[22px] pb-[5px] mb-[24px] outline-none text-[16px] font-lato font-normal text-[#181818] hover:border-blue-400 transition-all duration-200 ease-in-out focus:border-blue-400"
            />
          </div>
          <input
            type="text"
            placeholder="Address (Optional)"
            className="w-full rounded-[12px] border border-[#dbdbdb] px-[16px] py-[13px] mb-[24px] outline-none text-[16px] font-lato font-normal text-[#181818] hover:border-blue-400 transition-all duration-200 ease-in-out focus:border-blue-400"
          />
          <input
            type="text"
            placeholder="City (Optional)"
            className="w-full rounded-[12px] border border-[#dbdbdb] px-[16px] py-[13px] mb-[24px] outline-none text-[16px] font-lato font-normal text-[#181818] hover:border-blue-400 transition-all duration-200 ease-in-out focus:border-blue-400"
          />
          <div className="flex flex-col space-x-0 lg:flex-row lg:items-center lg:space-x-4 w-full lg:mb-[24px] mb-[150px]">
            <input
              type="text"
              placeholder="State (Optional)"
              className="w-full rounded-[12px] border border-[#dbdbdb] px-[16px] py-[13px] outline-none text-[16px] mb-[24px] lg:mb-0 font-lato font-normal text-[#181818] hover:border-blue-400 transition-all duration-200 ease-in-out focus:border-blue-400"
            />
            <input
              type="text"
              placeholder="Zip Code (Optional)"
              className="w-full rounded-[12px] border border-[#dbdbdb] px-[16px] py-[13px] outline-none text-[16px] font-lato font-normal text-[#181818] hover:border-blue-400 transition-all duration-200 ease-in-out focus:border-blue-400"
            />
          </div>

          <div className="fixed bottom-0 left-[14px] right-0 pb-[14px] bg-white lg:left-0 lg:pb-0 lg:relative lg:bottom-0  lg:flex lg:items-center lg:justify-end w-full">
            <button className="mt-[32px] w-[95vw] lg:w-max text-center bg-blue-500 text-white font-lato font-normal text-[14px] rounded-[6px] px-[30px] py-[8px] hover:bg-blue-400 transition-all duration-200 ease-in-out focus:border-blue-400">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
