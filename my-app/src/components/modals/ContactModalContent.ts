import { useState, useRef, useEffect } from "react";
import { TextField, IconButton, Box, CircularProgress } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { palette, modalCenteredSx, circularProgressSx } from "../../assets/theme";
import axios = require("axios");

export const ContantModalContentTS = () => {
    const [formData, setFormData] = useState<FormData>({} as FormData);
    const [formLoading, setFormLoading] = useState<Boolean>(false);
    const nameField = useRef<HTMLDivElement>(null);
    const emailField = useRef<HTMLDivElement>(null);
    const messageField = useRef<HTMLDivElement>(null);
}