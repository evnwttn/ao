import React, { useState, useRef, useEffect } from "react";
import { LoginExistingUser, LoginNewUser } from "./index";
import { UserLoginData } from "../../types";

export const LoginModalContent = ({
  activeUser,
  setActiveUser,
  setModalType,
}: any) => {
  const axios = require("axios").default;
  const [setMessage, setUserMessage] = useState<string>();
  const [isNewUser, setIsNewUser] = useState<Boolean>(false);
  const [userLoginData, setUserLoginData] = useState<UserLoginData>();
  const emailField = useRef<HTMLInputElement>(null);
  const passwordField = useRef<HTMLInputElement>(null);
  const confirmField = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState<Boolean>(true);

  const sendUserLoginData = () => {
    if (confirmField?.current?.value !== passwordField?.current?.value) {
      setUserMessage("Passwords don't match");
    } else {
      setUserLoginData({
        email: emailField?.current?.value!,
        password: passwordField?.current?.value!,
      });
    }
  };

  useEffect(() => {
    if (activeUser) {
      setModalType(isNewUser ? "" : "Load");
    }
  });

  useEffect(() => {
    if (isNewUser) {
      userLoginData &&
        axios
          .post(
            "http://localhost:5000/user",
            {
              ...userLoginData,
            },
            { withCredentials: true }
          )
          .then((data: any) => setActiveUser(data.data))
          .catch(function (error: any) {
            console.log(error);
          });
    } else {
      userLoginData &&
        axios
          .put(
            "http://localhost:5000/user",
            {
              ...userLoginData,
            },
            { withCredentials: true }
          )
          .then((data: any) => setActiveUser(data.data))
          .catch(function (error: any) {
            console.log(error);
          });
    }
  }, [userLoginData, axios, isNewUser, setActiveUser]);

  return isNewUser ? (
    <LoginNewUser
      emailField={emailField}
      passwordField={passwordField}
      confirmField={confirmField}
      showPassword={showPassword}
      setShowPassword={setShowPassword}
      isNewUser={isNewUser}
      setIsNewUser={setIsNewUser}
      sendUserLoginData={sendUserLoginData}
    />
  ) : (
    <LoginExistingUser
      emailField={emailField}
      passwordField={passwordField}
      showPassword={showPassword}
      setShowPassword={setShowPassword}
      isNewUser={isNewUser}
      setIsNewUser={setIsNewUser}
      sendUserLoginData={sendUserLoginData}
    />
  );
};
