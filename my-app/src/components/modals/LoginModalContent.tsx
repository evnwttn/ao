import React, { useState, useRef, useEffect } from "react";
import { LoginExistingUser, LoginNewUser } from "./index";
import { UserLoginData } from "../../types";

export const LoginModalContent = ({ setModalType }: any) => {
  const axios = require("axios").default;
  const [isNewUser, setIsNewUser] = useState<Boolean>(false);
  const [userLoginData, setUserLoginData] =
    useState<Omit<UserLoginData, "id" | "sessions">>();
  const [userDataVerified, setUserDataVerified] = useState<UserLoginData>();
  const emailField = useRef<HTMLInputElement>(null);
  const passwordField = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState<Boolean>(true);

  const sendUserLoginData = () => {
    setUserLoginData({
      email: emailField?.current?.value!,
      password: passwordField?.current?.value!,
    });
  };

  useEffect(() => {
    userDataVerified && console.log(userDataVerified);
    userDataVerified && setModalType("Load");
  }, [userDataVerified, setModalType]);

  useEffect(() => {
    if (isNewUser) {
      userLoginData &&
        axios
          .post("http://localhost:5000/login", {
            ...userLoginData,
          })
          .then((data: any) => setUserDataVerified(data.data))
          .catch(function (error: any) {
            console.log(error);
          });
    } else {
      userLoginData &&
        axios
          .put("http://localhost:5000/login", {
            ...userLoginData,
          })
          .then((data: any) => console.log(JSON.stringify(data)))
          .catch(function (error: any) {
            console.log(error);
          });
    }
  }, [userLoginData, axios, isNewUser]);

  return isNewUser ? (
    <LoginNewUser
      emailField={emailField}
      passwordField={passwordField}
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
