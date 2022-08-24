import * as React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../media/icons/logo.png";
import SidebarNavItem from "./SidebarNavItem";
import { LinkIcon } from "../../../media/icons/icons";

interface Props {}

const Sidebar: React.FC<Props> = () => {
  return (
    <div className="flex flex-col flex-none w-64 h-screen">
      <div className="flex flex-col bg-slate-800 h-full p-4">
        <div className="py-4">
          <img src={Logo} alt="logo" className="w-16 select-none" />
        </div>
        <nav className="h-full flex flex-col">
          <ul className="flex flex-col gap-y-2">
            <SidebarNavItem title="Home" />
            <SidebarNavItem title="Exercises" />
            <SidebarNavItem title="Programs" />
            <SidebarNavItem title="Nutrition" />
          </ul>
        </nav>
      </div>
      <div className="bg-slate-600 p-4 flex flex-row items-center gap-x-4">
        <div className="w-12 h-12 rounded-full bg-slate-50 p-2">
          <img src={Logo} alt="logo" className="w-16 select-none" />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-base text-white font-semibold">Youri Gruiters</h3>
          <div className="flex flex-row items-center text-white hover:font-semibold hover:text-slate-200 cursor-pointer gap-x-1">
            <Link to="/dashboard/profile">
              <p className="text-sm">View profile</p>
            </Link>
            <LinkIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
