import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { NewModalContentTextfieldForm } from "./NewModalContentTextfieldForm";
import { NewModalContentListForm } from "./NewModalContentListForm";

export const NewModalContent = () => {
  const [sessionData, setSessionData] = useState();
  const [startNewSession, setStartNewSession] = useState(false);
  const [formPrompt, setFormPrompt] = useState(0);
  const [inputArray, setInputArray] = useState([]);
  const textInput = React.useRef(null);
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      parameters: ["title"],
    },
  });

  const onSubmit = (data) => {
    setSessionData({ ...data });
    switch (formPrompt) {
      case 0: // session author
        setFormPrompt(formPrompt + 1);
        textInput.current.value = "";
        break;
      case 1: // session title
        setFormPrompt(formPrompt + 1);
        textInput.current.value = "";
        break;
      case 2: // track titles
        setInputArray((previousArray) =>
          previousArray.filter((previousInput) => previousInput === "title")
        );
        inputArray.length && setFormPrompt(formPrompt + 1);
        break;
      case 3: // parameter titles
        inputArray.length && setFormPrompt(formPrompt + 1);
        break;
      default:
        textInput.current.value = "";
    }
  };

  useEffect(() => {
    formPrompt === 4 && setStartNewSession(true);
  }, [formPrompt, sessionData]);

  const onSubmitTrackOrParameter = () => {
    if (textInput.current.value) {
      switch (formPrompt) {
        case 2:
          if (inputArray.length <= 11) {
            setInputArray((inputArray) => [
              ...inputArray,
              textInput.current.value,
            ]);
          } else {
            alert(`Maximum Number of Tracks Reached`);
          }
          break;
        case 3:
          if (inputArray.length <= 10) {
            setInputArray((inputArray) => [
              ...inputArray,
              textInput.current.value,
            ]);
          } else {
            alert(`Maximum Number of Parameters Reached`);
          }
          break;
        default:
          alert(`Invald Title`);
      }
    } else {
      alert(`Please enter a valid title`);
    }

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

  return formPrompt <= 1 ? (
    <NewModalContentTextfieldForm
      handleSubmit={handleSubmit}
      onSubmitForm={onSubmit}
      textInput={textInput}
      formPrompt={formPrompt}
      register={register}
    />
  ) : formPrompt <= 3 ? (
    <NewModalContentListForm
      handleSubmit={handleSubmit}
      onSubmitTrackOrParameter={onSubmitTrackOrParameter}
      onRemoveTrackOrParameter={onRemoveTrackOrParameter}
      onSubmitList={onSubmit}
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
