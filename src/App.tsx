import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./components/layout/sidebar/Sidebar";

interface Props {}

const App: React.FC<Props> = () => {
  const navigate = useNavigate();
  const loggedIn = false;

  useEffect(() => {
    if (!loggedIn) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex w-full h-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default App;
