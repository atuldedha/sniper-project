import {
  ArrowRightOnRectangleIcon,
  CalendarIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { personalData } from "../staticData";
import SmallHomeOptions from "./SmallHomeOptions/SmallHomeOptions";

const SmallHome = ({ handleSelection }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center space-x-2 pl-[24px] pr-[16px] pt-[16px] pb-[18px] mb-[16px]">
        <div className="h-[56px] w-[56px] rounded-full bg-[#bf360d] flex items-center justify-center">
          <span className="text-3xl text-white font-lato font-bold">
            {personalData.name.charAt(0)}
          </span>
        </div>
        <div className="flex flex-col ml-16">
          <span className="text-[14px] leading-[24px] font-lato font-normal text-[#181818]">
            {personalData.name}
          </span>
          <span className="text-[#556784] text-[12px] leading-[20px] font-lato">
            {personalData.email}
          </span>
        </div>
      </div>

      <div className="flex flex-col border-t-[1px] border-t-[#d9e1ee]">
        <SmallHomeOptions
          Icon={CalendarIcon}
          title="Appointments"
          index={1}
          handleSelection={handleSelection}
        />
        <SmallHomeOptions
          Icon={Cog6ToothIcon}
          title="Account Settings"
          index={2}
          handleSelection={handleSelection}
        />
        <SmallHomeOptions
          Icon={CalendarIcon}
          title="Your Bookings Page"
          index={3}
          handleSelection={handleSelection}
        />
        <SmallHomeOptions
          Icon={ArrowRightOnRectangleIcon}
          title="Logout"
          index={4}
          handleSelection={handleSelection}
        />
      </div>
    </div>
  );
};

export default SmallHome;
