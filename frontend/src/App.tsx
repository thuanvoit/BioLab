import { CleanUp } from "./Main/CleanUp";
import { Nav } from "./components/Nav";
import StoreTip from "./services/Store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  console.log("rendering App()");
  return (
    <div>
      <ToastContainer newestOnTop={true} />
      <Nav></Nav>
      // protocol processing
      <div className="no-scrollbar flex h-screen w-screen justify-center overflow-y-auto bg-slate-900 pb-10 pt-28">
        <StoreTip>
          <CleanUp />
        </StoreTip>
      </div>
    </div>
  );
}

export default App;
