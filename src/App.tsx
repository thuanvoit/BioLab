import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { CleanUp } from "./Main/CleanUp";
import { Nav } from "./components/Nav";
import StoreTip from "./services/Store";

function App() {
  return (
    <div>
      <Nav></Nav>

      <div className="h-screen w-screen flex bg-white dark:bg-slate-900 overflow-y-auto justify-center pt-28 pb-20 no-scrollbar">
        <StoreTip>
          <CleanUp />
        </StoreTip>
      </div>
    </div>
  );
}

export default App;
