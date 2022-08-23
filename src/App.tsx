import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

interface Props {}

const App: React.FC<Props> = () => {
  const navigate = useNavigate();
  const loggedIn = false;

  useEffect(() => {
    if (!loggedIn) {
      console.log("sturen");
      navigate("/account/login");
    }
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
