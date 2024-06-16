"use client";

import React, { useRef } from "react";
import { Box, IconButton, TextField } from "@mui/material";
import {
  useController,
  UseControllerProps,
} from "react-hook-form";
import { ISignUpForm } from "../../interfaces";
import { Email } from "@mui/icons-material";

export default function InputEmail(props: UseControllerProps<ISignUpForm>) {
  const { field, fieldState } = useController(props);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleOnClick() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "4px",
        height: "90px",
      }}
    >
      <IconButton
        sx={{ width: "48px", height: "48px", marginTop: "8px" }}
        aria-label="focus email input"
        onClick={handleOnClick}
      >
        <Email />
      </IconButton>

      <TextField
        sx={{ paddingBottom: "16px", width: "400px" }}
        {...field}
        inputRef={inputRef}
        autoComplete="off"
        id="email"
        label="Enter your email."
        variant="standard"
        error={!!fieldState.error?.message}
        helperText={fieldState.error?.message}
      />
    </Box>
  );
}
