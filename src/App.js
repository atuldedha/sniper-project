import { useState } from "react";
import AppointmentCard from "./components/AppointmentCard/AppointmentCard";
import Sidebar from "./components/Sidebar/Sidebar";
import { personalData } from "./components/AppointmentCard/staticData";

function App() {
  const [selected, setSelected] = useState(1);
  return (
    <div className="flex space-x-4 px-[20px] py-[40px]">
      <Sidebar selected={selected} setSelected={setSelected} />

      {selected === 1 && <AppointmentCard name={personalData.name} />}
    </div>
  );
}

export default App;
