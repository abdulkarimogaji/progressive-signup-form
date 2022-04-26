import {
  Box,
  Typography,
  Stack,
  TextField,
} from "@mui/material";
import { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { setEmail, setEmailErrors } from '../../features/user/userSlice'
import { FormOneState } from "../StartPage";
import { validateEmail, myValidation, anyError } from "./validations";
import ErrorBox from "../ErrorBox";
import { useState } from "react";


const FormOne = () => {
  // const [email, setEmail] = useState("")
  // const [emailErr, setEmailErr] = useState({} as myValidation)
  const emailErr = useSelector((state: RootState) => state.user.loginErrors.email)
  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value))
    var err = validateEmail(e.target.value);
    dispatch(setEmailErrors(err))
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
          error={anyError(emailErr)}
          required
          onChange={handleChange}
        ></TextField>
        <ErrorBox validation={emailErr} />
      </Stack>
    </Box>
  );
};
export default FormOne;
