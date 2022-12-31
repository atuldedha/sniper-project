import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { personalData } from "../staticData";

const AppointmentDetailCard = ({ data, hideDetail }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center space-x-5 mb-[38px]">
        <ChevronLeftIcon
          className="h-[20px] w-[20px] text-[#181818] hover:cursor-pointer"
          onClick={hideDetail}
        />
        <span className="text-[20px] text-[#181818] font-bold font-lato leading-[1.4] uppercase">{`${data.date} ${data.month} ${data.year}, ${data.time}`}</span>
      </div>

      <div className="pr-[24px] border border-[#d9e1ee] rounded-[4px] w-full flex items-center cursor-pointer hover:shadow-md transition-all duration-200 ease-in-out mb-[32px]">
        <img
          src={data.image2}
          alt="img2"
          className="h-[52px] w-[52px] object-contain rounded-full ml-[24px]"
        />
        <div className="flex items-center justify-between ml-[16px] py-[24px] w-full">
          <div className="flex flex-col mr-[15px]">
            <span className="mb-[8px] font-lato font-bold text-[16px] leading-[24px]">{`${data.name} (${data.type})`}</span>
            <div className="flex items-center space-x-2">
              <img
                src={data.image}
                alt="profile"
                className="h-[20px] w-[20px] object-contain rounded-full"
              />
              <span className="text-[#3b4c66] text-[12px] font-lato font-normal">
                {data.subType}
              </span>
            </div>
          </div>

          <div className="flex items-center">
            <span className="mr-[16px] font-lato font-normal text-[#3b4c66]">
              {data.price}
            </span>
          </div>
        </div>
      </div>

      <span className="mb-[22px] font-normal font-lato text-[#3b4c66]">
        Appointment Details
      </span>

      <div className="flex mb-[20px]">
        <span className="w-[160px] text-[#8495b1] leading-[1.5] font-lato font-normal">
          Your Time
        </span>
        <span className="text-[16px] text-[#181818] font-normal font-lato leading-[1.4] uppercase">{`${data.date} ${data.month} ${data.year}, ${data.time}`}</span>
      </div>
      <div className="flex mb-[20px]">
        <span className="w-[160px] text-[#8495b1] leading-[1.5] font-lato font-normal">
          Your Time
        </span>
        <div className="flex flex-col">
          <span className="text-[16px] font-lato font-normal text-[#181818] leading-[1.5]">
            {personalData.name}
          </span>
          <span className="text-[16px] font-lato font-normal text-[#181818] leading-[1.5]">
            {personalData.email}
          </span>
          <span className="text-[16px] font-lato font-normal text-[#181818] leading-[1.5]">
            +91 {personalData.phone}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-end w-full space-x-4">
        <button className="border-none outline-none text-red-500 font-lato text-[16px] leading-[1.5] ">
          Cancel Appointment
        </button>

        <button className="px-[30px] py-[5px] text-center border border-[#d9e1ee] font-normal text-[#3b4c66] text-[16px] rounded-[4px] transition-all duration-200 ease-in-out hover:border-blue-400">
          Reschedule
        </button>
      </div>
    </div>
  );
};

export default AppointmentDetailCard;
