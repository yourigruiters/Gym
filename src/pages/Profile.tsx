import { signOut } from "firebase/auth";
import React, { useState } from "react";
import Button from "../components/form/Button";
import { auth } from "../firebase";

interface Props {}

const Profile: React.FC<Props> = () => {
  const [error, setError] = useState("");

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((err) => {
        // An error happened.
        console.log("Unknown error happened.");
        setError(err.message);
      });
  };

  return (
    <>
      <Button
        type="button"
        classDecider="outlined"
        value="Log out"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleLogout(e)}
      />
      Profile - {error ? error : "GEEN ERROR BIJ UITLOGGEN"}
    </>
  );
};

export default Profile;
