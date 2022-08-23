import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/form/Button";
import Input from "../components/form/Input";
import Logo from "../media/icons/logo.png";

interface Props {}

const ForgotPassword: React.FC<Props> = () => {
  const [email, setEmail] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(email);
  };

  return (
    <>
      <div className="flex flex-col pb-10 items-center">
        <img src={Logo} alt="logo" className="w-16 select-none pb-2" />
        <h1 className="text-2xl font-semibold">Fitness Tracking</h1>
      </div>
      <form
        className="flex flex-col pb-10 items-center gap-y-4 w-full"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleLogin(e)}
      >
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setEmail(e.currentTarget.value)
          }
        />
        <Button
          type="submit"
          classDecider="submit"
          value="Request password reset"
        />
      </form>
      <div className="flex flex-row items-center justify-between w-full">
        <p>Already have an account?</p>

        <Link to="/account/login">
          <Button classDecider="outlined" value="Log in" />
        </Link>
      </div>
    </>
  );
};

export default ForgotPassword;
