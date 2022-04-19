import { Box, Typography, Button, Stack, Paper, Grid, TextField } from "@mui/material";
import ErrorBox from "./ErrorBox";
const FormFour = () => {
  const validation = [
    {
      message: "Email must be valid",
      valid: true
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
        Email Address
      </Typography>
      <Stack spacing={3} p={3}>
      <TextField variant="standard" label="Email Address" error required></TextField>
      <ErrorBox validation={validation}/>

      </Stack>

    </Box>
  );
};
export default FormFour;
