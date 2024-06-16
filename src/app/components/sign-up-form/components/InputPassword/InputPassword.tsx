"use client";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import {
  useController,
  UseControllerProps,
} from "react-hook-form";
import { ISignUpForm } from "../../interfaces";

export default function InputPassword(props: UseControllerProps<ISignUpForm>) {
  const { field, fieldState } = useController(props);
  const [showPassword, setShowPassword] = useState(false);

  function handleClickShowPassword(): void {
    setShowPassword((showPassword) => !showPassword);
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "4px",
        height: "90px",
        width: "100%",
      }}
    >
      <IconButton
        sx={{ width: "48px", height: "48px", marginTop: "8px" }}
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
      <TextField
        sx={{ paddingBottom: "16px", width: "400px" }}
        {...field}
        type={showPassword ? "text" : "password"}
        id="password"
        label="Enter your password."
        variant="standard"
        error={!!fieldState.error?.message}
        helperText={fieldState.error?.message}
      />
    </Box>
  );
}
