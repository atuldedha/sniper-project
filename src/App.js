import { useState } from "react";
import AppointmentCard from "./components/AppointmentCard/AppointmentCard";
import Sidebar from "./components/Sidebar/Sidebar";
import { personalData } from "./components/AppointmentCard/staticData";
import SmallHome from "./components/AppointmentCard/SmallHome/SmallHome";
import AccountSettings from "./components/AccountSettings/AccountSettings";

function App() {
  const [showDetail, setShowDetail] = useState(false);
  const [selected, setSelected] = useState(1);
  const handleSelection = (index) => {
    setSelected(index);
    setShowDetail(true);
  };
  const handleBackClick = () => {
    setShowDetail(false);
  };
  return (
    <div className="flex space-x-4 lg:py-[40px]">
      <div className="inline-block lg:hidden w-full">
        {!showDetail ? (
          <SmallHome
            selected={selected}
            setSelected={setSelected}
            handleSelection={handleSelection}
          />
        ) : (
          <>
            {selected === 1 && (
              <AppointmentCard
                name={personalData.name}
                handleBackClick={handleBackClick}
              />
            )}
            {selected === 2 && (
              <AccountSettings handleBackClick={handleBackClick} />
            )}
          </>
        )}
      </div>
      <div className="hidden lg:flex">
        <Sidebar selected={selected} setSelected={setSelected} />
        {selected === 1 && <AppointmentCard name={personalData.name} />}
        {selected === 2 && (
          <AccountSettings handleBackClick={handleBackClick} />
        )}
      </div>
    </div>
  );
}

export default App;
