import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/form/Button";
import Input from "../components/form/Input";
import Warning from "../components/form/Warning";
import { auth } from "../firebase";
import Logo from "../media/icons/logo.png";

interface Props {}

const ForgotPassword: React.FC<Props> = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [requestSend, setRequestSend] = useState(false);

  const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setRequestSend(true);
      })
      .catch((err) => {
        const errorCode = err.code;

        switch (errorCode) {
          case "auth/missing-email":
            setError("Please enter a valid email.");
            break;
          case "auth/user-not-found":
            setError("This email does not belong to an account.");
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
      {!requestSend ? (
        <form
          className="flex flex-col pb-10 items-center gap-y-4 w-full"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleReset(e)}
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
          <Button
            type="submit"
            classDecider="submit"
            value="Request password reset"
          />
        </form>
      ) : (
        <div className="flex flex-col pb-10 items-center gap-y-4 w-full">
          <p className="text-center">
            A password request email has been send to your provided email.
            Please make sure to check your spam box.
          </p>
        </div>
      )}
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
