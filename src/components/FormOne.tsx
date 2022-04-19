import {
  Box,
  Typography,
  Button,
  Stack,
  Paper,
  Grid,
  TextField,
} from "@mui/material";
import { FormOneState, myValidation } from "./StartPage";
import ErrorBox from "./ErrorBox";
import React from "react";

const validateEmail = (email: string): myValidation => {
  const isNotEmpty = email !== ""
  return [
    {
      clause: "email must be a valid email address",
      valid: isNotEmpty,
    },
  ];
};
const FormOne = ({
  formData,
  setter,
}: {
  formData: FormOneState;
  setter: React.Dispatch<React.SetStateAction<FormOneState>>;
}) => {
  const validation = formData.emailError;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    var isValid = validateEmail(e.target.value);
    setter((prev) => {
      return { ...prev, email: e.target.value, emailError: isValid };
    });
  };
  return (
    <Box>
      <Typography
        variant="h5"
        color="secondary"
        fontWeight="bold"
        textAlign="center"
      >
        Email Address
      </Typography>
      <Stack spacing={3} p={3}>
        <TextField
          variant="standard"
          label="Email Address"
          error={!formData.emailError[0].valid}
          required
          onChange={handleChange}
        ></TextField>
        <ErrorBox validation={validation} />
      </Stack>
    </Box>
  );
};
export default FormOne;
