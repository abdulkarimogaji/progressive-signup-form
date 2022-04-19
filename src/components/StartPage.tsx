import { Box, Typography, Button, Stack, Paper, Grid } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import FormOne from "./FormOne";
import { useSearchParams } from "react-router-dom"
import { NotFound } from "./404"

const StartPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const formId = parseInt(searchParams.get("form_id")!)
  const getCurrentForm = () => {
    switch (formId){
      case 1:
        return FormOne
      default:
        return NotFound
    }
  }
  const CurrentForm = getCurrentForm()

  return (
    <Stack justifyContent="center" direction="row" width="100%">
      <Box width="80%">
        <Grid container sx={{
          backgroundColor: "purple",
          height:"5px"
        }}></Grid>
        <Paper>
          <Stack direction="row" p={3}>
            <Box width="50%">
              <CurrentForm />
            </Box>
            <Box width="50%" overflow="hidden">
              <img width="600px" alt="" src="/images/login.jpg" />
              <br/>
              <br/>
              <br/>
              <Stack direction="row" justifyContent="space-between">
                {
                  formId !== 1 && <Button
                  sx={{
                    borderRadius: "20px",
                    paddingX: "2rem",
                  }}
                  variant="contained"
                  size="large"
                  color="secondary"
                  startIcon={<ArrowBack />}
                >
                  {" "}
                  Previous
                </Button>
                }
              <Button
                sx={{
                  borderRadius: "20px",
                  paddingX: "2rem",
                }}
                variant="contained"
                size="large"
                color="secondary"
                endIcon={<ArrowForward />}
              >
                {" "}
                Next
              </Button>
              </Stack>
              
            </Box>
          </Stack>
        </Paper>
      </Box>
    </Stack>
  );
};

export default StartPage;
