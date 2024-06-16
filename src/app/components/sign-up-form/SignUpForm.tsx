"use client";

import { useForm } from "react-hook-form";
import { ISignUpForm } from "./interfaces";
import InputPassword from "./components/InputPassword";
import InputEmail from "./components/InputEmail";
import { REG_EX } from "@/constants";
import { Button } from "@mui/material";
import InputCountry from "./components/InputCountry";
import { useState } from "react";

export default function SignUpForm() {
  const [isSubmitting, setSubmitting] = useState(false);
  const {
    handleSubmit,
    control,
    reset,
    formState: { isDirty },
  } = useForm<ISignUpForm>({
    defaultValues: {
      email: "",
      password: "",
      country: "",
    },
    mode: "onTouched",
  });

  function onSubmit(data: ISignUpForm): void {
    setSubmitting(true);
    setTimeout(() => {
      console.log("SignUpForm", data);
      reset();
      setSubmitting(false);
    }, 2000);
  }

  function onResetForm(): void {
    reset(undefined, { keepErrors: false });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <InputEmail
        control={control}
        name="email"
        rules={{
          required: { value: true, message: "Email is required" },
          pattern: { value: REG_EX.EMAIL, message: "Invalid email format" },
        }}
      />
      <InputPassword
        control={control}
        name="password"
        rules={{
          required: { value: true, message: "Password is required" },
          minLength: {
            value: 6,
            message: "Password must be 6 characters or more",
          },
        }}
      />
      <InputCountry control={control} name="country" rules={{}} />
      <Button
        variant="text"
        type="submit"
        color="success"
        disabled={isSubmitting}
      >
        {isSubmitting ? "submitting" : "submit"}
      </Button>
      <Button
        variant="text"
        type="reset"
        color="secondary"
        onClick={onResetForm}
        disabled={isSubmitting || !isDirty}
      >
        reset
      </Button>
    </form>
  );
}
