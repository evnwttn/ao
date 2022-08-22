import { useState, useRef, useEffect } from "react";
import { TextField, IconButton, Box, CircularProgress } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { palette, modalCenteredSx, circularProgressSx } from "../../assets/theme";
import axios = require("axios");
