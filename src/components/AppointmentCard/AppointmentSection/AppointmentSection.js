import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";

const AppointmentSection = ({
  appointments,
  setDataToShow,
  setShowDetails,
}) => {
  return (
    <div className="flex flex-col lg:px-0 px-[16px]">
      <span className="text-[#3b4c66] text-[16px] mb-[16px] font-normal">
        March 2023
      </span>
      {appointments?.map((appointment) => (
        <div
          className="lg:pr-[24px] border border-[#d9e1ee] rounded-[4px] pt-[12px] px-[16px] pb-[12px] lg:pt-0 lg:px-0 lg:pb-0 w-full flex lg:flex-row flex-col lg:items-center cursor-pointer hover:shadow-md transition-all duration-200 ease-in-out"
          onClick={() => {
            setShowDetails(true);
            setDataToShow(appointment);
          }}
        >
          <div className="flex items-center lg:hidden">
            <span className="text-[14px] text-[#8495b1] font-normal font-lato uppercase">{`${appointment.date} ${appointment.month} ${appointment.year}, ${appointment.time}`}</span>
          </div>
          <div className="hidden py-[10px] lg:flex flex-col items-center w-[160px] border-r-[1px] border-r-[#d9e1ee]">
            <span className="uppercase text-[12px] leading-[20px] text-[#3b4c66] font-lato">
              {appointment.month}
            </span>
            <span className="text-[32px] leading-[40px] font-bold text-[#181818] font-lato">
              {appointment.date}
            </span>
            <span className="uppercase text-[12px] leading-[20px] text-[#3b4c66] font-lato">
              {appointment.time}
            </span>
          </div>

          <div className="flex lg:items-center justify-between mt-[5px] lg:mt-0 lg:ml-[32px] lg:py-[24px] w-full">
            <div className="flex flex-col lg:mr-[15px]">
              <span className="mb-[8px] font-lato font-bold text-[16px] leading-[24px]">{`${appointment.name} (${appointment.type})`}</span>
              <div className="flex items-center space-x-2">
                <img
                  src={appointment.image}
                  alt="profile"
                  className="h-[20px] w-[20px] object-contain rounded-full"
                />
                <span className="text-[#3b4c66] text-[12px] font-lato font-normal">
                  {appointment.subType}
                </span>
              </div>
            </div>

            <div className="flex lg:items-center mt-[2px] lg:mt-0">
              <span className="mr-[16px] font-lato font-normal text-[#3b4c66]">
                {appointment.price}
              </span>
              <ChevronRightIcon className="text-[#142640] h-[12px] w-[12px] mt-[6px] lg:mt-0" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentSection;
