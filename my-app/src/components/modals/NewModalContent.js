import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { NewModalContentTextfieldForm } from "./NewModalContentTextfieldForm";
import { NewModalContentListForm } from "./NewModalContentListForm";

export const NewModalContent = () => {
  const [sessionData, setSessionData] = useState();
  const [startNewSession, startNewSessionLaunch] = useState(false);
  const [formPrompt, setFormPrompt] = useState(0);
  const [thang, setThang] = useState("author");
  const [inputArray, setInputArray] = useState([]);
  const textInput = React.useRef(null);
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      parameters: ["title"],
    },
  });

  const onSubmitForm = (data) => {
    thang === "author" ? setThang("id") : setThang("tracks");
    setSessionData({ ...data });
    textInput.current.value = "";
  };

  const onSubmitTrackOrParameter = () => {
    formPrompt === 2 && inputArray.length <= 11
      ? setInputArray((inputArray) => [...inputArray, textInput.current.value])
      : formPrompt === 3 && inputArray.length <= 10
      ? setInputArray((inputArray) => [...inputArray, textInput.current.value])
      : alert(
          `Maximum Number of ${
            formPrompt === 2 ? `Tracks` : `Parameters`
          } Reached`
        );
    textInput.current.value = "";
  };

  const onRemoveTrackOrParameter = (title) => {
    setInputArray((previousArray) =>
      previousArray.filter((previousInput) => previousInput !== title)
    );
  };

  const onSubmitList = (data) => {
    formPrompt === 2 &&
      setInputArray((previousArray) =>
        previousArray.filter((previousInput) => previousInput === "title")
      );
    setFormPrompt(formPrompt + 1);
    setSessionData({ ...data });
  };

  useEffect(() => {
    formPrompt === 4 && startNewSessionLaunch(true);
  }, [formPrompt, sessionData]);

  return formPrompt <= 1 ? (
    <NewModalContentTextfieldForm
      handleSubmit={handleSubmit}
      onSubmitForm={onSubmitForm}
      textInput={textInput}
      formPrompt={formPrompt}
      register={register}
      thang={thang}
    />
  ) : formPrompt <= 3 ? (
    <NewModalContentListForm
      handleSubmit={handleSubmit}
      onSubmitTrackOrParameter={onSubmitTrackOrParameter}
      onRemoveTrackOrParameter={onRemoveTrackOrParameter}
      onSubmitList={onSubmitList}
      formPrompt={formPrompt}
      sessionData={sessionData}
      textInput={textInput}
      inputArray={inputArray}
      setValue={setValue}
      thang={thang}
    />
  ) : (
    startNewSession && (
      <Navigate
        to="/aogrid"
        state={{ from: "new", data: sessionData }}
        replace={true}
      />
    )
  );
};
