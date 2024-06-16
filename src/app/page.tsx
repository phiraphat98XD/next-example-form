"use client";

import { Box, Typography } from "@mui/material";
import SignUpForm from "./components/sign-up-form";

export default function SignUpPage() {
  return (
    <Box
      component="main"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      sx={{
        height: "100vh",
        width: "100%",
        padding: "16px",
        backgroundColor: "#dddddd",
      }}
    >
      <Typography variant="h1" sx={{ marginBottom: "20px" }}>
        Sign up
      </Typography>
      <SignUpForm />
    </Box>
  );
}
