import { Box, Button, Stack, Paper, Grid } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { FormOne, FormTwo, FormThree } from "./Forms";
import { useNavigate, useSearchParams } from "react-router-dom";
import { NotFound } from "./404";
import { anyError } from "./Forms/validations";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";



const StartPage = () => {

  const loginErrors = useSelector((state: RootState) => state.user.loginErrors)
  // create states for each form


  //get the formId passed as a query parameter
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const formId = parseInt(searchParams.get("form_id")!);

  // function for advancing to the next form.. prevents advance when errors
  const nextForm = () => {
    switch (formId) {
      case 1:
        if (anyError(loginErrors.email)) {
          alert("an error in input");
          return;
        }
        break;
      case 2:
        if (
          anyError(loginErrors.address) ||
          anyError(loginErrors.firstName) ||
          anyError(loginErrors.lastName) ||
          anyError(loginErrors.phoneNum)
        ) {
          alert("an error in input");
          return;
        }
        break;
      case 3:
        if (anyError(loginErrors.password)) {
          alert("an error in input");
          return;
        }
    }

    if (formId === 4) {
      navigate("/");
      return;
    } else {
      setSearchParams({ form_id: (formId + 1).toString() });
    }
  };

  // select the correct form that should be passed in the jsx
  const getCurrentForm = () => {
    switch (formId) {
      case 1:
        return <FormOne />;
      case 2:
        return <FormTwo />;
      case 3:
        return (
          <FormThree />
        );
      default:
        return <NotFound />;
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
            <Box width="50%">{CurrentForm}</Box>
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
