import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/form/Button";
import Input from "../components/form/Input";
import { auth } from "../firebase";
import Logo from "../media/icons/logo.png";

interface Props {}

const Signup: React.FC<Props> = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password === passwordRepeat) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Will be handled
          console.log(userCredential);
          //   CREATE ACCOUNT IN DATABASE FOR THIS USER
        })
        .catch((err) => {
          const errorCode = err.code;

          switch (errorCode) {
            case "auth/weak-password":
              setError("Password is to weak.");
              break;
            case "auth/internal-error":
              setError("Please enter a valid password.");
              break;
            case "auth/invalid-email":
              setError("Please enter a valid email.");
              break;
            case "auth/email-already-in-use":
              setError("This email already belongs to an account.");
              break;
            default:
              console.log(errorCode);
              setError("Unknown error - Not documented");
              break;
          }
        });
    } else {
      setError("Passwords do not match.");
    }
  };

  return (
    <>
      <div className="flex flex-col pb-10 items-center">
        <img src={Logo} alt="logo" className="w-16 select-none pb-2" />
        <h1 className="text-2xl font-semibold">Fitness Tracking</h1>
      </div>
      <form
        className="flex flex-col pb-10 items-center gap-y-4 w-full"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSignup(e)}
      >
        {error ? <p className="text-red-700">{error}</p> : ""}
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
        <Input
          type="password"
          placeholder="Repeat password"
          value={passwordRepeat}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setPasswordRepeat(e.currentTarget.value)
          }
        />
        <Button type="submit" classDecider="submit" value="Sign up" />
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

export default Signup;
