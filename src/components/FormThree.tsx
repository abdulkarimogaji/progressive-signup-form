import { Box, Typography, Button, Stack, Paper, Grid, TextField, Input } from "@mui/material";
import ErrorBox from "./ErrorBox";
const FormThree = () => {
  const validation = [
    {
      message: "password must contain symbols",
      valid: true
    },
    {
      message: "password must contain symbols",
      valid: true
    },
    {
      message: "password must contain symbols",
      valid: true
    },
    {
      message: "password must contain symbols",
      valid: true
    },
    {
      message: "password must contain symbols",
      valid: true
    },
  ]
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
      <Input type="password" placeholder="Password"/>
      <Input type="password" placeholder="Password Confirmation"/>
      <ErrorBox validation={validation}/>

      </Stack>

    </Box>
  );
};
export default FormThree;
