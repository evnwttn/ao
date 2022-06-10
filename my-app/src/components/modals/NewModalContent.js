import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { NewModalContentTextfieldForm } from "./NewModalContentTextfieldForm";
import { NewModalContentListForm } from "./NMCLFRewrite";

export const NewModalContent = () => {
  const [sessionData, setSessionData] = useState();
  const [startNewSession, startNewSessionLaunch] = useState(false);
  const [formPrompt, setFormPrompt] = useState(0);
  const [inputArray, setInputArray] = useState([]);
  const textInput = React.useRef(null);
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      parameters: ["title"],
    },
  });

  // prompt key
  // form 1 - session author (textfield)
  // form 2 - sesson title (textfield)
  // form 3 - session track titles (list)
  // form 4 - session parameter titles (list)

  const onSubmitForm = (data) => {
    setFormPrompt(formPrompt + 1);
    setSessionData({ ...data });
    textInput.current.value = "";
  };

  const onSubmitTrackOrParameter = () => {
    // ensures track & parameter totals remain below 12
    formPrompt === 2 && inputArray.length <= 11
      ? setInputArray((inputArray) => [...inputArray, textInput.current.value])
      : formPrompt === 3 && inputArray.length <= 10
      ? setInputArray((inputArray) => [...inputArray, textInput.current.value])
      : alert(
          `Maximum Number of ${
            formPrompt === 2 ? `Tracks` : `Parameters`
          } Reached`
        );
    // ensures track & parameter titles do not repeat
    setInputArray((inputArray) =>
      inputArray.filter((input, index, array) => array.indexOf(input) === index)
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
    inputArray.length >= 1 && setFormPrompt(formPrompt + 1);
    setSessionData({ ...data });
  };

  useEffect(() => {
    formPrompt === 4 && startNewSessionLaunch(true);
  }, [formPrompt, sessionData]);

  useEffect(() => {
    console.log(inputArray);
  }, [inputArray]);

  return formPrompt <= 1 ? (
    <NewModalContentTextfieldForm
      handleSubmit={handleSubmit}
      onSubmitForm={onSubmitForm}
      textInput={textInput}
      formPrompt={formPrompt}
      register={register}
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
