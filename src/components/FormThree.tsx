import { Box, Typography, Button, Stack, Paper, Grid, TextField, Input } from "@mui/material";
import ErrorBox from "./ErrorBox";
import { FormThreeState } from "./StartPage";



const FormThree = ({formData, setter}: {
  formData: FormThreeState;
  setter: React.Dispatch<React.SetStateAction<FormThreeState>>;
}) => {


  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    var val = e.currentTarget.value
    setter(prev => {
      return {...prev, password: val}
    })
  }

  const handleConfirmation = (e: React.ChangeEvent<HTMLInputElement>) => {
    var val = e.currentTarget.value
    var validity = [
      {
        clause: "Password must be more than 6 characters",
        valid: formData.password.length > 6
      },
      {
        clause: "Password must Match",
        valid: val === formData.password
      }
    ]
    setter(prev => {
      return {...prev, firstName: val, passwordErr: validity}
    })
  }
  const validation = formData.passwordErr
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
      <ErrorBox validation={validation}/>

      </Stack>

    </Box>
  );
};
export default FormThree;
