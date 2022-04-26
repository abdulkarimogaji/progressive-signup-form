import { Box, Typography} from "@mui/material";
import { CheckSharp, ClearSharp } from "@mui/icons-material";
import { myValidation } from "./Forms/validations"

type ErrorBoxProps = {
  validation: myValidation
};

const ErrorBox = ({validation}: ErrorBoxProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "lightgray",
        padding: "1rem",
        borderRadius: "5px",
      }}
    >
      {validation.length && validation.map((field, i) => (
        <Typography fontSize="0.8rem" color="InfoText" m={2}>
          {field.clause}
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
