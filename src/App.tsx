import Routing from "./components/Routing";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

type Props = {};

const App: React.FC<Props> = () => {
  return (
    <>
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex w-full h-full">
          <Routing />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default App;
