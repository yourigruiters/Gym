import * as React from "react";
import { Outlet } from "react-router-dom";

interface Props {}

const AccountOutlet: React.FC<Props> = () => {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="flex w-1/2 items-center justify-center">
        <div className="flex flex-col w-96 items-center p-8 border-slate-400 border-2 rounded-lg">
          <Outlet />
        </div>
      </div>
      <div
        className="flex w-1/2 min-h-screen"
        style={{
          background: `linear-gradient(
                          to right,
                          #0f172a,
                          #1e293b,
                          #334155
                        )`
        }}
      ></div>
    </div>
  );
};

export default AccountOutlet;
