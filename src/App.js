import { useState } from "react";
import { CalendarIcon } from "@heroicons/react/24/solid";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [selected, setSelected] = useState(1);
  return (
    <div className="flex space-x-4 px-[20px] py-[40px]">
      <Sidebar selected={selected} setSelected={setSelected} />
    </div>
  );
}

export default App;
