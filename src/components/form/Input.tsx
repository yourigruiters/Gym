import * as React from "react";

interface Props {
  type: "text" | "email" | "password";
  placeholder: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
