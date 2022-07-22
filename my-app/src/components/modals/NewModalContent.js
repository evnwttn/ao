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

  const submitSessionData = (data) => {
    setSessionData({ ...data });
  };

  useEffect(() => {
    if (formPrompt <= 1) {
      sessionData && textInput.current.value && setFormPrompt(formPrompt + 1);
      textInput.current.value = "";
    }
    if (formPrompt === 4) {
      setStartNewSession(true);
      textInput.current.value = "";
    }

    console.log(sessionData);
  }, [sessionData, formPrompt]);

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

  useEffect(() => {
    checkDuplicates();
  }, [inputArray.length]);

  const checkDuplicates = (inputArray) => {
    setInputArray((inputArray) =>
      inputArray.filter((input, index, array) => array.indexOf(input) === index)
    );
  };

  useEffect(() => {
    checkDuplicates();
    textInput.current.value = "";
  }, [inputArray.length]);

  useEffect(() => {
    console.log(inputArray);
  }, [inputArray]);

  // const onSubmitTrackOrParameter = () => {
  // inputArray.forEach((title, index) => {
  //   formPrompt === 2
  //     ? setValue(`tracks.${index}.title`, title)
  //     : setValue(`parameters.${index + 1}`, title);
  // });
  // };

  // const addTrackOrParameter = () => {
  //   if (textInput.current.value) {
  //     switch (formPrompt) {
  //       case 2:
  //         if (inputArray.length <= 11) {
  //           setInputArray((inputArray) => [
  //             ...inputArray,
  //             textInput.current.value,
  //           ]);
  // setInputArray((previousArray) =>
  //   previousArray.filter((previousInput) => previousInput === "title")
  // );
  //         } else {
  //           alert(`Maximum Number of Tracks Reached`);
  //         }
  //         break;
  //       case 3:
  //         if (inputArray.length <= 10) {
  //           setInputArray((inputArray) => [
  //             ...inputArray,
  //             textInput.current.value,
  //           ]);
  //         } else {
  //           alert(`Maximum Number of Elements Reached`);
  //         }
  //         break;
  //       default:
  //         alert(`Invald Title`);
  //     }
  //   } else {
  //     alert(`Please enter a valid title`);
  //   }

  // setInputArray((inputArray) =>
  //   inputArray.filter((input, index, array) => array.indexOf(input) === index)
  // );
  // };

  // const onSubmitForm = (data) => {
  //   switch (formPrompt) {
  //     case 2: // track titles
  //       setInputArray((previousArray) =>
  //         previousArray.filter((previousInput) => previousInput === "title")
  //       );
  //       inputArray.length && setFormPrompt(formPrompt + 1);
  //       break;
  //     case 3: // parameter titles
  //       inputArray.length && setFormPrompt(formPrompt + 1);
  //       break;
  //     default:
  //       textInput.current.value = "";
  //   }
  //   onSubmitSessionData(data);
  // };

  const addParameterList = (title) => {
    if (inputArray.length <= 10) {
      setInputArray((inputArray) => [...inputArray, title]);
    } else {
      alert(`Maximum Number of Elements Reached`);
    }
  };

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
