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

      <div className="no-scrollbar flex h-screen w-screen justify-center overflow-y-auto bg-white pb-20 pt-28 dark:bg-slate-900">
        <StoreTip>
          <CleanUp />
        </StoreTip>
      </div>
    </div>
  );
}

export default App;
