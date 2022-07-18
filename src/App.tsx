import React from "react";
import { SideBar } from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="flex">
      <div className="flex-[2]"></div>
      <div className="flex-[8]"></div>
      <div className="flex-[1]">
        <SideBar />
      </div>
    </div>
  );
}

export default App;
