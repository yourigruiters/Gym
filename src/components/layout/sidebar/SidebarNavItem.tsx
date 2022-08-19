import * as React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  SideBarDashboardIcon,
  SideBarExercisesIcon,
  SideBarNutritionIcon,
  SideBarProgramsIcon,
} from "../../../media/icons/icons";

type Pagenames = "Dashboard" | "Exercises" | "Programs" | "Nutrition";

interface Props {
  title: Pagenames;
}

const SidebarNavItem: React.FC<Props> = ({ title }) => {
  const location = useLocation().pathname.replace("/", "");

  const getClassnames = (pagename: Pagenames) => {
    if (pagename.toLocaleLowerCase() === location) {
      return "rounded-md bg-slate-900 p-2 items-center flex text-white";
    }

    return "rounded-md hover:bg-slate-900 p-2 items-center flex text-slate-400 hover:text-white cursor-pointer";
  };

  const getIcon = (pagename: Pagenames) => {
    switch (pagename) {
      case "Dashboard":
        return <SideBarDashboardIcon />;
      case "Exercises":
        return <SideBarExercisesIcon />;
      case "Programs":
        return <SideBarProgramsIcon />;
      case "Nutrition":
        return <SideBarNutritionIcon />;
    }
  };

  return (
    <Link to={`/${title.toLowerCase()}`}>
      <li className={getClassnames(title)}>
        {getIcon(title)}
        <p className="pl-2">{title}</p>
      </li>
    </Link>
  );
};

export default SidebarNavItem;
