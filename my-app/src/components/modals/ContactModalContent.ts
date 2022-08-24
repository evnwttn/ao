import { useState, useRef, useEffect } from "react";
import { TextField, IconButton, Box, CircularProgress } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { palette, modalCenteredSx, circularProgressSx } from "../../assets/theme";

export const ContantModalContentTS = () => {
    const axios = require("axios").default;
    const [formData, setFormData] = useState<FormData>({} as FormData);
    const [formLoading, setFormLoading] = useState<Boolean>(false);
    const nameField = useRef<HTMLDivElement>(null);
    const emailField = useRef<HTMLDivElement>(null);
    const messageField = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formData) {
      setFormLoading(true);
      axios
        .post("http://localhost:5000/contact", {
          ...formData,
        })
        .then((_data: any) => console.log(JSON.stringify(_data)))
        .catch(function (error: any) {
          console.log(error);
        });
    }
  }, [formData, axios]);

}