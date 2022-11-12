import React, { useState, useRef, useEffect } from "react";
import { LoginExistingUser, LoginNewUser } from "./index";
import { UserLoginData } from "../../types";

export const LoginModalContent = ({
  userDataVerified,
  setUserDataVerified,
  setModalType,
}: any) => {
  const axios = require("axios").default;
  const [isNewUser, setIsNewUser] = useState<Boolean>(false);
  const [userLoginData, setUserLoginData] =
    useState<Omit<UserLoginData, "id">>();
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
    if (userDataVerified) {
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
          .then((data: any) => setUserDataVerified(data.data))
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
          .then((data: any) => setUserDataVerified(data.data))
          .catch(function (error: any) {
            console.log(error);
          });
    }
  }, [userLoginData, axios, isNewUser, setUserDataVerified]);

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
