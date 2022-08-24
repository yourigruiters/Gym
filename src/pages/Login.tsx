import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/form/Button";
import Input from "../components/form/Input";
import Warning from "../components/form/Warning";
import { auth } from "../firebase";
import Logo from "../media/icons/logo.png";

interface Props {}

const Login: React.FC<Props> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Will be handled
        console.log(userCredential);
      })
      .catch((err) => {
        const errorCode = err.code;

        switch (errorCode) {
          case "auth/internal-error":
            setError("Please enter a valid password.");
            break;
          case "auth/invalid-email":
            setError("Please enter a valid email.");
            break;
          case "auth/user-not-found":
            setError("This email does not belong to an account.");
            break;
          case "auth/wrong-password":
            setError("The entered password is incorrect.");
            break;
          default:
            console.log(errorCode);
            setError("Unknown error - Not documented");
            break;
        }
      });
  };

  const resetError = () => {
    setError("");
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
        {error && <Warning message={error} onClick={resetError} />}
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setEmail(e.currentTarget.value)
          }
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setPassword(e.currentTarget.value)
          }
        />
        <Button type="submit" classDecider="submit" value="Log in" />
        <Link to="/account/forgotpassword">
          <p className="hover:font-semibold">Forgot your password?</p>
        </Link>
      </form>
      <div className="flex flex-row items-center justify-between w-full">
        <p>Don't have an account?</p>
        <Link to="/account/signup">
          <Button classDecider="outlined" value="Sign up" />
        </Link>
      </div>
    </>
  );
};

export default Login;
