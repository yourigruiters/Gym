import Logo from "../media/icons/logo.png";

type Props = {};

const Sidebar: React.FC<Props> = () => {
  return (
    <div className="flex flex-col flex-none w-64 h-screen">
      <div className="flex flex-col bg-slate-800 h-full p-4">
        <div className="py-4">
          <img src={Logo} alt="logo" className="w-16 select-none" />
        </div>
        <div className="h-full">List</div>
      </div>
      <div className="bg-slate-700 p-4">User</div>
    </div>
  );
};

export default Sidebar;
