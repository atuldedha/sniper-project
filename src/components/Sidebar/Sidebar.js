import {
  ArrowRightOnRectangleIcon,
  CalendarIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import SidebarOptions from "./SidebarOptions/SidebarOptions";
import { personalData } from "../AppointmentCard/staticData";

const Sidebar = ({ selected, setSelected }) => {
  const handleSelection = (index) => {
    setSelected(index);
  };
  return (
    <div className="flex flex-col w-[244px] ml-10 mt-10">
      <div className="flex flex-col items-center">
        <div className="h-[120px] w-[120px] rounded-full bg-[#bf360d] mb-[32px] flex items-center justify-center">
          <span className="text-6xl text-white font-lato font-bold">
            {personalData.name.charAt(0)}
          </span>
        </div>
        <span className="font-bold text-[20px] text-black leading-[1.4] font-lato">
          {personalData.name}
        </span>
        <span className="font-normal text-[12px] text-[#3b4c66] font-lato">
          {personalData.email}
        </span>
      </div>
      <div className="flex flex-col mt-[30px] space-y-4">
        <SidebarOptions
          Icon={CalendarIcon}
          selected={selected === 1}
          index={1}
          title="Appointments"
          handleSelection={handleSelection}
        />
        <SidebarOptions
          Icon={Cog6ToothIcon}
          selected={selected === 2}
          index={2}
          title="Account Settings"
          handleSelection={handleSelection}
        />
        <SidebarOptions
          Icon={CalendarIcon}
          selected={selected === 3}
          index={3}
          title="Your Booking Page"
          handleSelection={handleSelection}
        />
        <SidebarOptions
          Icon={ArrowRightOnRectangleIcon}
          selected={selected === 4}
          index={4}
          title="Logout"
          handleSelection={handleSelection}
        />
      </div>
    </div>
  );
};

export default Sidebar;
