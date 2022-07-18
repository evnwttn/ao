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

  const onSubmitSessionData = (data) => {
    setSessionData({ ...data });
  };

  useEffect(() => {
    if (formPrompt <= 1) {
      sessionData && textInput.current.value && setFormPrompt(formPrompt + 1);
      textInput.current.value = "";
    }

    if (formPrompt === 4) {
      setStartNewSession(true);
    }

    console.log(sessionData);
  }, [sessionData, formPrompt]);

  const onSubmitForm = (data) => {
    setSessionData({ ...data });
    switch (formPrompt) {
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

  const onSubmitTrackOrParameter = () => {
    inputArray.forEach((title, index) => {
      formPrompt === 2
        ? setValue(`tracks.${index}.title`, title)
        : setValue(`parameters.${index + 1}`, title);
    });
  };

  const addTrackOrParameter = () => {
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
            alert(`Maximum Number of Elements Reached`);
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

  const addParameterList = (title) => {
    if (inputArray.length <= 10) {
      setInputArray((inputArray) => [...inputArray, title]);
    } else {
      alert(`Maximum Number of Elements Reached`);
    }

    setInputArray((inputArray) =>
      inputArray.filter((input, index, array) => array.indexOf(input) === index)
    );
  };

  const onRemoveTrackOrParameter = (title) => {
    setInputArray((inputArray) =>
      inputArray.filter((titles) => titles !== title)
    );
  };

  return formPrompt <= 1 ? (
    <NewModalContentTextfieldForm
      handleSubmit={handleSubmit}
      onSubmitForm={onSubmitSessionData}
      textInput={textInput}
      formPrompt={formPrompt}
      register={register}
    />
  ) : formPrompt <= 3 ? (
    <NewModalContentListForm
      handleSubmit={handleSubmit}
      addTrackOrParameter={addTrackOrParameter}
      addParameterList={addParameterList}
      onSubmitTrackOrParameter={onSubmitTrackOrParameter}
      onRemoveTrackOrParameter={onRemoveTrackOrParameter}
      onSubmitForm={onSubmitForm}
      formPrompt={formPrompt}
      sessionData={sessionData}
      textInput={textInput}
      inputArray={inputArray}
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
