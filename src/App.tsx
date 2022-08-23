import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

interface Props {}

const App: React.FC<Props> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const loggedIn = false;

  useEffect(() => {
    if (!loggedIn && !location.pathname.includes("/account")) {
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
