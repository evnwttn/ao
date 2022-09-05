import React, { useState, useEffect, useRef, useCallback } from "react";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { NewModalContentTextfieldForm } from "./NewModalContentTextfieldForm";
import { NewModalContentListForm } from "./NewModalContentListForm";

export const NewModalContent = () => {
  const axios = require("axios").default;
  const [sessionData, setSessionData] = useState();
  const [startNewSession, setStartNewSession] = useState(false);
  const [formPrompt, setFormPrompt] = useState(0);
  const [triggerSubmit, setTriggerSubmit] = useState(0);
  const [inputArray, setInputArray] = useState([]);
  const textInput = useRef(null);
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      parameters: ["title"],
    },
  });

  const addInputArray = () => {
    let textField = textInput.current.value;
    switch (formPrompt) {
      case 2:
        if (inputArray.length <= 11) {
          setInputArray((inputArray) => [...inputArray, textField]);
        } else {
          alert(`Maximum Number of Tracks Reached`);
        }
        break;
      case 3:
        if (inputArray.length <= 10) {
          setInputArray((inputArray) => [...inputArray, textField]);
        } else {
          alert(`Maximum Number of Elements Reached`);
        }
        break;
      default:
        alert(`Invalid title`);
    }
  };

  const removeInputArray = (title) => {
    setInputArray((inputArray) =>
      inputArray.filter((titles) => titles !== title)
    );
  };

  const addParameterList = (title) => {
    if (inputArray.length <= 10) {
      setInputArray((inputArray) => [...inputArray, title]);
    } else {
      alert(`Maximum Number of Elements Reached`);
    }
  };

  const checkDuplicates = () => {
    setInputArray((inputArray) =>
      inputArray.filter((input, index, array) => array.indexOf(input) === index)
    );
  };

  useEffect(() => {
    checkDuplicates();
    textInput.current.value = "";
  }, [inputArray.length]);

  const submitInputArray = () => {
    inputArray.forEach((title, index) => {
      formPrompt === 2
        ? setValue(`tracks.${index}.title`, title)
        : setValue(`parameters.${index + 1}`, title);
    });
    setTriggerSubmit(triggerSubmit + 1);
  };

  useEffect(() => {
    if (triggerSubmit >= 1) {
      handleSubmit((data) => submitSessionData(data))();
    }
  }, [triggerSubmit, handleSubmit]);

  const submitSessionData = (data) => {
    setSessionData({ ...data });
  };

  useEffect(() => {
    if (formPrompt <= 1) {
      sessionData && textInput.current.value && setFormPrompt(formPrompt + 1);
      textInput.current.value = "";
    }
    if (formPrompt === 2) {
      sessionData.tracks && setFormPrompt(formPrompt + 1);
      setInputArray([]);
    }
    if (formPrompt === 3) {
      sessionData.parameters.length > 1 && setFormPrompt(formPrompt + 1);
    }
    if (formPrompt === 4) {
      setStartNewSession(true);
    }
  }, [sessionData, formPrompt]);

  useEffect(() => {
    startNewSession && formatSessionData();
  }, [startNewSession, formatSessionData]);

  useEffect(() => {
    startNewSession &&
      axios
        .post("http://localhost:5000/new", {
          ...sessionData,
        })
        .then((_data) => console.log(JSON.stringify(_data)))
        .catch(function (error) {
          console.log(error);
        });
  }, [startNewSession, axios, sessionData]);

  return formPrompt <= 1 ? (
    <NewModalContentTextfieldForm
      handleSubmit={handleSubmit}
      onSubmitForm={submitSessionData}
      textInput={textInput}
      formPrompt={formPrompt}
      register={register}
    />
  ) : formPrompt <= 3 ? (
    <NewModalContentListForm
      handleSubmit={handleSubmit}
      addInputArray={addInputArray}
      removeInputArray={removeInputArray}
      addParameterList={addParameterList}
      submitInputArray={submitInputArray}
      setValue={setValue}
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
