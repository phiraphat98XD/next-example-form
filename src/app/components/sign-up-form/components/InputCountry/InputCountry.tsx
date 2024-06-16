"use client";

import React, { useRef, useState } from "react";
import {
  Box,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useController, UseControllerProps } from "react-hook-form";
import { ISignUpForm } from "../../interfaces";
import { Flag } from "@mui/icons-material";

const COUNTRIES = [
  { label: "Thailand", value: 1 },
  { label: "U.S.", value: 2 },
] as const;

export default function InputCountry(props: UseControllerProps<ISignUpForm>) {
  const [open, setOpen] = useState(false);
  const { field, fieldState } = useController(props);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleOnClick() {
    if (inputRef.current) {
      inputRef.current.focus();
      setOpen(true);
    }
  }

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
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
        <Flag />
      </IconButton>
      <FormControl
        variant="standard"
        sx={{ minWidth: 400 }}
        error={!!fieldState.error?.message}
      >
        <InputLabel id="Country">Select your country</InputLabel>
        <Select
          id="country"
          label="Country"
          {...field}
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          inputRef={inputRef}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {COUNTRIES.map((country) => (
            <MenuItem key={country.label} value={country.value}>
              {country.label}
            </MenuItem>
          ))}
        </Select>
        {!!fieldState.error?.message && (
          <FormHelperText error>{fieldState.error.message}</FormHelperText>
        )}
      </FormControl>
    </Box>
  );
}
