import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import AppointmentDetailCard from "./AppoinmtentDetailCard/AppointmentDetailCard";
import AppointmentSection from "./AppointmentSection/AppointmentSection";
import { data } from "./staticData";

const AppointmentCard = ({ name, handleBackClick }) => {
  const [selected, setSelected] = useState(1);
  const [showDetail, setShowDetails] = useState(false);
  const [dataToShow, setDataToShow] = useState({});
  return (
    <div className="lg:shadow-md lg:rounded-[4px] flex flex-col lg:px-[32px] lg:pt-[32px] lg:pb-[48px] lg:mx-[24px] lg:w-[668px] lg:border lg:border-[#f6f7fc]">
      {!showDetail ? (
        <>
          <div className="flex items-center py-[12px] px-[16px] lg:hidden">
            <ChevronLeftIcon
              className="h-[20px] w-[20px] text-[#181818] mr-[14px]"
              onClick={handleBackClick}
            />
            <span className="font-bold font-lato text-[20px] leading-[1.4] text-[#181818]">
              Appoinments
            </span>
          </div>
          <div className="hidden lg:flex-col lg:flex">
            <span className="text-[20px] font-lato font-bold leading-[1.7]">
              Hello {name}
            </span>
            <span className="mt-[50px] mb-[20px] font-lato">
              Your Appointments
            </span>
          </div>
          <div className="flex items-center lg:space-x-6 w-full border-b-[1px] border-b-[#f0f0f0] mb-[32px]">
            <div
              className={`${
                selected === 1
                  ? "shadow-shadow1 text-[#181818]"
                  : "text-[#8495b1]"
              } w-1/2 lg:w-max text-center text-[14px] leading-[24px] py-[7px] px-[14px] hover:cursor-pointer font-lato`}
              onClick={() => setSelected(1)}
            >
              Upcoming
            </div>
            <div
              className={`${
                selected === 2
                  ? "shadow-shadow1 text-[#181818]"
                  : "text-[#8495b1]"
              } w-1/2 lg:lg:w-max text-center text-[14px] leading-[24px] py-[7px] px-[14px] hover:cursor-pointer font-lato`}
              onClick={() => setSelected(2)}
            >
              Past
            </div>
          </div>

          {selected === 1 && (
            <AppointmentSection
              appointments={data}
              setDataToShow={setDataToShow}
              setShowDetails={setShowDetails}
            />
          )}
        </>
      ) : (
        <AppointmentDetailCard
          data={dataToShow}
          hideDetail={() => setShowDetails(false)}
        />
      )}
    </div>
  );
};

export default AppointmentCard;
