import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Routing from "./components/Routing";
import { Outlet } from "react-router-dom";

type Props = {};

const App: React.FC<Props> = () => {
  return (
    <>
      <Routing />
      <Outlet />
    </>
  );
};

export default App;
