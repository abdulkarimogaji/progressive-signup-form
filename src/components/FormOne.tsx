import { Box, Typography, Button, Stack, Paper, Grid, TextField } from "@mui/material";
import ErrorBox from "./ErrorBox";
const FormOne = () => {
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
      <TextField variant="standard" label="Email Address" error required></TextField>
      <ErrorBox />

      </Stack>

    </Box>
  );
};
export default FormOne;
