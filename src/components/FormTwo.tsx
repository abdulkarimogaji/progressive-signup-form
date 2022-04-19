import { Box, Typography, Button, Stack, Paper, Grid, TextField } from "@mui/material";
import ErrorBox from "./ErrorBox";
const FormTwo = () => {
    const validation = [
        {
            message: "first name is required",
            valid: false
        },
        {
            message: "last name is required",
            valid: false
        },
        {
            message: "phone number is required",
            valid: false
        },
        {
            message: "Address must be more than 10 characters",
            valid: true
        },
        {
            message: "Address must be more than 10 characters",
            valid: false
        }
    ]
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
      <TextField variant="standard" label="First Name" error required></TextField>
      <TextField variant="standard" label="Last Name" error required></TextField>
      <TextField variant="standard" label="Phone Number" error required></TextField>
      <TextField variant="standard" label="Nickname"></TextField>
      <TextField variant="standard" label="Address"></TextField>
      <ErrorBox validation={validation}/>

      </Stack>

    </Box>
  );
};
export default FormTwo;
