import { Box, Typography, Stack, Input } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import ErrorBox from "../ErrorBox";
import { setPassword, setPasswordErrs } from "../../features/user/userSlice";



const FormThree = () => {

  const password = useSelector((state: RootState) => state.user.password)
  const passwordErrs = useSelector((state: RootState) => state.user.loginErrors.password)
  const dispatch = useDispatch()
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    var val = e.currentTarget.value
    dispatch(setPassword(val))
  }

  const handleConfirmation = (e: React.ChangeEvent<HTMLInputElement>) => {
    var val = e.currentTarget.value
    var validity = [
      {
        clause: "Password must be more than 6 characters",
        valid: password.length > 6
      },
      {
        clause: "Password must Match",
        valid: val === password
      }
    ]
    dispatch(setPasswordErrs(validity))
  }

  return (
    <Box>
      <Typography
        variant="h5"
        color="secondary"
        fontWeight="bold"
        textAlign="center"
      >
        Password
      </Typography>
      <Stack spacing={3} p={3}>
      <Input type="password" placeholder="Password" onChange={handlePasswordChange}/>
      <Input type="password" placeholder="Password Confirmation" onChange={handleConfirmation}/>
      <ErrorBox validation={passwordErrs}/>

      </Stack>

    </Box>
  );
};
export default FormThree;
