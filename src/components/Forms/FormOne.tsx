import {
  Box,
  Typography,
  Stack,
  TextField,
} from "@mui/material";
import { FormOneState } from "../StartPage";
import { validateEmail } from "./validations";
import ErrorBox from "../ErrorBox";
import React from "react";


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
