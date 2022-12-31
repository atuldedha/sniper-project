import React, { useState } from "react";
import AppointmentSection from "./AppointmentSection/AppointmentSection";
import data from "./staticData";

const AppointmentCard = ({ name }) => {
  const [selected, setSelected] = useState(1);
  return (
    <div className="shadow-md rounded-[4px] flex flex-col px-[32px] pt-[32px] pb-[48px] mx-[24px] w-[668px] border border-[#f6f7fc]">
      <span className="text-[20px] font-lato font-bold leading-[1.7]">
        Hello {name}
      </span>
      <span className="mt-[50px] mb-[20px] font-lato">Your Appointments</span>

      <div className="flex items-center space-x-6 w-full border-b-[1px] border-b-[#f0f0f0] mb-[32px]">
        <div
          className={`${
            selected === 1 ? "shadow-shadow1 text-[#181818]" : "text-[#8495b1]"
          } text-[14px] leading-[24px] py-[7px] px-[14px] hover:cursor-pointer font-lato`}
          onClick={() => setSelected(1)}
        >
          Upcoming
        </div>
        <div
          className={`${
            selected === 2 ? "shadow-shadow1 text-[#181818]" : "text-[#8495b1]"
          } text-[14px] leading-[24px] py-[7px] px-[14px] hover:cursor-pointer font-lato`}
          onClick={() => setSelected(2)}
        >
          Past
        </div>
      </div>

      {selected === 1 && <AppointmentSection appointments={data} />}
    </div>
  );
};

export default AppointmentCard;
