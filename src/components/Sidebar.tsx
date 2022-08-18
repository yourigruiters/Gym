import Logo from "../media/icons/logo.png";

type Props = {};

const Sidebar: React.FC<Props> = () => {
  return (
    <div className="flex flex-col flex-none w-64 h-screen">
      <div className="flex flex-col bg-slate-800 h-full p-4">
        <div className="py-4">
          <img src={Logo} alt="logo" className="w-16 select-none" />
        </div>
        <nav className="h-full flex flex-col">
          <ul className="flex flex-col gap-y-2">
            <li className="rounded-md bg-slate-900 p-2 items-center flex text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <p className="pl-2">Dashboard</p>
            </li>
            <li className="rounded-md hover:bg-slate-900 p-2 items-center flex text-slate-400 hover:text-white cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <p className="pl-2">Exercises</p>
            </li>
            <li className="rounded-md hover:bg-slate-900 p-2 items-center flex text-slate-400 hover:text-white cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
              <p className="pl-2">Programs</p>
            </li>
            <li className="rounded-md hover:bg-slate-900 p-2 items-center flex text-slate-400 hover:text-white cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                />
              </svg>
              <p className="pl-2">Nutrition</p>
            </li>
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
            <p className="text-sm">View profile</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
