import { Box, Typography, Button, Stack, Paper, Grid } from "@mui/material";
import { CheckSharp, ClearSharp } from "@mui/icons-material";

type ErrorBoxProps = {
  validation: {
    message: string;
    valid: boolean;
  }[];
};

const ErrorBox = (props: ErrorBoxProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "lightgray",
        padding: "1rem",
        borderRadius: "5px",
      }}
    >
      {props.validation.map((field, i) => (
        <Typography fontSize="0.8rem" color="InfoText" m={2}>
          {field.message}
          {field.valid ? (
            <CheckSharp color="success" fontSize="small" />
          ) : (
            <ClearSharp color="error"/>
          )}
        </Typography>
      ))}
    </Box>
  );
};

export default ErrorBox;
