import {
  Box,
  Typography,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import ErrorBox from "../ErrorBox";
import { FormTwoState } from "../StartPage";
import { validateAddr, validatefirstName, validateLastName, validatePhonenum, anyError } from "./validations";






const FormTwo = ({
  formData,
  setter,
}: {
  formData: FormTwoState;
  setter: React.Dispatch<React.SetStateAction<FormTwoState>>;
}) => {
  const validation = [
    ...formData.addressErr,
    ...formData.firstNameErr,
    ...formData.lastNameErr,
    ...formData.phoneNumErr,
  ];

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    var val = e.currentTarget.value
    var validity = validatefirstName(val)
    setter(prev => {
      return {...prev, firstName: val, firstNameErr: validity}
    })
  }

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    var val = e.currentTarget.value
    var validity = validateLastName(val)
    setter(prev => {
      return {...prev, lastName: val, lastNameErr: validity}
    })
  }

  const handlePhoneNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    var val = e.currentTarget.value
    var validity = validatePhonenum(val)
    setter(prev => {
      return {...prev, phoneNum: val, phoneNumErr: validity}
    })
  }
  const handleNickNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    var val = e.currentTarget.value
    setter(prev => {
      return {...prev, nickName: val}
    })
  }
  const handleAddrChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    var val = e.currentTarget.value
    var validity = validateAddr(val)
    setter(prev => {
      return {...prev, address: val, addressErr: validity}
    })
  }

  return (
    <Box>
      <Typography
        variant="h5"
        color="secondary"
        fontWeight="bold"
        textAlign="center"
      >
        Personal Information
      </Typography>
      <Stack spacing={3} p={3}>
        <TextField
          variant="standard"
          label="First Name"
          error={anyError(formData.firstNameErr)}
          required
          onChange={handleFirstNameChange}
        ></TextField>
        <TextField
          variant="standard"
          label="Last Name"
          error={anyError(formData.lastNameErr)}
          required
          onChange={handleLastNameChange}
          ></TextField>
        <TextField
          variant="standard"
          label="Phone Number"
          error={anyError(formData.phoneNumErr)}
          required
          onChange={handlePhoneNumChange}
          ></TextField>
        <TextField variant="standard" label="Nickname"
        onChange={handleNickNameChange}
        ></TextField>
        <TextField variant="standard" label="Address"
          onChange={handleAddrChange}
          ></TextField>
        <ErrorBox validation={validation} />
      </Stack>
    </Box>
  );
};
export default FormTwo;
