import * as React from "react";

interface Props {
  type?: "submit" | "button" | "reset";
  classDecider: "submit" | "outlined";
  value: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = ({
  type = "button",
  value,
  classDecider,
  onClick
}) => {
  const getClassNames = (classDecider: "submit" | "outlined") => {
    switch (classDecider) {
      case "submit":
        return "inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3";
      case "outlined":
        return "bg-transparent hover:bg-slate-500 text-slate-700 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded";
    }
  };

  const getStyles = (classDecider: "submit" | "outlined") => {
    switch (classDecider) {
      case "submit":
        return {
          background: `linear-gradient(
                    to right,
                    #0f172a,
                    #1e293b,
                    #334155,
                    #475569
                  )`
        };
      case "outlined":
        return {};
    }
  };

  return (
    <button
      className={getClassNames(classDecider)}
      type={type}
      style={getStyles(classDecider)}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
