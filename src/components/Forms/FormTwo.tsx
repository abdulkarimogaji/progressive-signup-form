import { Box, Typography, Stack, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
  setAddr,
  setAddrErrs,
  setFirstName,
  setFirstNameErrs,
  setLastName,
  setLastNameErrs,
  setNickName,
  setPhoneNum,
  setPhoneNumErrs,
} from "../../features/user/userSlice";
import ErrorBox from "../ErrorBox";
import { FormTwoState } from "../StartPage";
import {
  validateAddr,
  validatefirstName,
  validateLastName,
  validatePhonenum,
  anyError,
} from "./validations";

const FormTwo = () => {
  // const validation = [
  //   ...formData.addressErr,
  //   ...formData.firstNameErr,
  //   ...formData.lastNameErr,
  //   ...formData.phoneNumErr,
  // ];
  const { firstName, lastName, phoneNum, address } = useSelector(
    (state: RootState) => state.user.loginErrors
  );

  const loginErrors = useSelector((state: RootState) => [
    ...state.user.loginErrors.firstName,
    ...state.user.loginErrors.lastName,
    ...state.user.loginErrors.phoneNum,
    ...state.user.loginErrors.address,
  ]);
  const dispatch = useDispatch();
  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    var val = e.target.value;
    dispatch(setFirstName(val));
    var errs = validatefirstName(val);
    dispatch(setFirstNameErrs(errs));
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    var val = e.currentTarget.value;
    dispatch(setLastName(val));
    var errs = validateLastName(val);
    dispatch(setLastNameErrs(errs));
  };

  const handlePhoneNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    var val = e.currentTarget.value;
    dispatch(setPhoneNum(val));
    var errs = validatePhonenum(val);
    dispatch(setPhoneNumErrs(errs));
  };
  const handleNickNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    var val = e.currentTarget.value;
    dispatch(setNickName(val));
  };
  const handleAddrChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    var val = e.currentTarget.value;
    dispatch(setAddr(val));
    var errs = validateAddr(val);
    dispatch(setAddrErrs(errs));
  };

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
          error={anyError(firstName)}
          required
          onChange={handleFirstNameChange}
        ></TextField>
        <TextField
          variant="standard"
          label="Last Name"
          error={anyError(lastName)}
          required
          onChange={handleLastNameChange}
        ></TextField>
        <TextField
          variant="standard"
          label="Phone Number"
          error={anyError(phoneNum)}
          required
          onChange={handlePhoneNumChange}
        ></TextField>
        <TextField
          variant="standard"
          label="Nickname"
          onChange={handleNickNameChange}
        ></TextField>
        <TextField
          variant="standard"
          label="Address"
          onChange={handleAddrChange}
        ></TextField>
        <ErrorBox validation={loginErrors} />
      </Stack>
    </Box>
  );
};
export default FormTwo;
