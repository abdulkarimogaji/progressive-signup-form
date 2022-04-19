import { Box, Typography, Button, Stack, Paper, Grid } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormThree from "./FormThree";
import FormFour from "./FormFour";
import { useSearchParams } from "react-router-dom";
import { NotFound } from "./404";

const validateForm = (id: number): boolean => {
  if (id === 4) {
    //to home page
  }
  return true;
};

const StartPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const formId = parseInt(searchParams.get("form_id")!);

  const nextForm = () => {
    const passed = validateForm(1);
    if (passed) {
      setSearchParams({ form_id: (formId + 1).toString() });
    }
  };
  const getCurrentForm = () => {
    switch (formId) {
      case 1:
        return FormOne;
      case 2:
        return FormTwo;
      case 3:
        return FormThree;
      case 4:
        return FormFour;
      default:
        return NotFound;
    }
  };
  const CurrentForm = getCurrentForm();

  return (
    <Stack justifyContent="center" direction="row" width="100%">
      <Box width="80%">
        <Grid
          width={formId * 25 + "%"}
          sx={{
            backgroundColor: "purple",
            height: "5px",
          }}
        ></Grid>
        <Paper>
          <Stack direction="row" p={3}>
            <Box width="50%">
              <CurrentForm />
            </Box>
            <Box width="50%" overflow="hidden">
              <img width="600px" alt="" src="/images/login.jpg" />
              <br />
              <br />
              <br />
              <Stack direction="row" justifyContent="space-between">
                {formId !== 1 && (
                  <Button
                    sx={{
                      borderRadius: "20px",
                      paddingX: "2rem",
                    }}
                    variant="contained"
                    size="large"
                    color="secondary"
                    startIcon={<ArrowBack />}
                    onClick={() =>
                      setSearchParams({ form_id: (formId - 1).toString() })
                    }
                  >
                    {" "}
                    Previous
                  </Button>
                )}
                {formId <= 4 && (
                  <Button
                    sx={{
                      borderRadius: "20px",
                      paddingX: "2rem",
                    }}
                    variant="contained"
                    size="large"
                    color="secondary"
                    endIcon={<ArrowForward />}
                    onClick={nextForm}
                  >
                    {" "}
                    {formId === 4 ? "SignUp" : "Next"}
                  </Button>
                )}
              </Stack>
            </Box>
          </Stack>
        </Paper>
      </Box>
    </Stack>
  );
};

export default StartPage;
