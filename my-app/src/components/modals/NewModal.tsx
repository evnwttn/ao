import React, { useState,  useRef, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { NewModalContentTextfieldForm } from "./NewModalContentTextfieldForm";
import { NewModalContentListForm } from "./NewModalContentListForm";

export const NewModalContent = () => {
    const axios = require("axios").default;
    // const [sessionData, setSessionData] = useState();
    const [startNewSession, setStartNewSession] = useState<Boolean>(false);
    const [formPrompt, setFormPrompt] = useState<Number>(0);
    const [triggerSubmit, setTriggerSubmit] = useState<Number>(0);
    const [inputArray, setInputArray] = useState<Array<string>>([]);
    const textInput = useRef<HTMLInputElement>(null);
    const { register, handleSubmit, setValue } = useForm({
      defaultValues: {
        parameters: ["title"],
      },
    });

    return <></>
}