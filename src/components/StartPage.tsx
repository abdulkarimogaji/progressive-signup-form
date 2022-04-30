import { Box, Stack, Paper, Grid } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { FormOne, FormTwo, FormThree } from "./Forms";
import { NotFound } from "./404";
import { useSearchParams } from "react-router-dom";

const StartPage = () => {
  const [searchParams] = useSearchParams();
  const formId = parseInt(searchParams.get("form_id")!);

  // select the correct form that should be passed in the jsx
  const getCurrentForm = () => {
    switch (formId) {
      case 1:
        return <FormOne />;
      case 2:
        return <FormTwo />;
      case 3:
        return <FormThree />;
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
                {formId !== 1 && formId < 4 && (
                  <label htmlFor="previousBtn" className="btn">
                    <ArrowBack /> <span>Previous</span>
                  </label>
                )}
                  <label htmlFor="formSubmit" className="btn">
                    <span>{formId === 3 ? "Submit" : "NEXT"}</span>{" "}
                    <ArrowForward />
                  </label>
              </Stack>
            </Box>
          </Stack>
        </Paper>
      </Box>
    </Stack>
  );
};

export default StartPage;
