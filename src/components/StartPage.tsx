import { Box, Button, Stack, Paper, Grid } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { FormOne, FormTwo, FormThree } from "./Forms";
import { useNavigate, useSearchParams } from "react-router-dom";
import { NotFound } from "./404";
import { useState } from "react";
import { myValidation, anyError } from "./Forms/validations";

const defaultFormOne = {
  email: "",
  emailError: [
    {
      clause: "Email must be valid",
      valid: false,
    },
    {
      clause: "Email must not be empty",
      valid: false,
    },
  ],
};
const defaultFormTwo = {
  firstName: "",
  lastName: "",
  phoneNum: "",
  address: "",
  nickName: "",
  firstNameErr: [
    {
      clause: "firstName must not be empty",
      valid: false,
    },
  ],
  lastNameErr: [
    {
      clause: "lastName must not be empty",
      valid: false,
    },
  ],
  phoneNumErr: [
    {
      clause: "phoneNum must not be empty",
      valid: false,
    },
    {
      clause: "phoneNum must only be digits",
      valid: false,
    },
  ],
  addressErr: [
    {
      clause: "Address must not be empty",
      valid: false,
    },
    {
      clause: "Address be more than 20 chracters",
      valid: false,
    },
  ],
};

const defaultFormThree = {
  password: "",
  passwordErr: [
    {
      clause: "Password must be more than 6 characters Long",
      valid: false,
    },
    {
      clause: "Password must match",
      valid: true,
    },
  ],
};

export type FormOneState = {
  email: string;
  emailError: myValidation;
};
export type FormTwoState = {
  firstName: string;
  lastName: string;
  phoneNum: string;
  address: string;
  nickName: string;
  firstNameErr: myValidation;
  lastNameErr: myValidation;
  phoneNumErr: myValidation;
  addressErr: myValidation;
};

export type FormThreeState = {
  password: string;
  passwordErr: myValidation;
};

const StartPage = () => {
  // create states for each form
  const [formOneState, setFormOneState] =
    useState<FormOneState>(defaultFormOne);
  const [formTwoState, setFormTwoState] = useState(defaultFormTwo);
  const [formThreeState, setFormThreeState] = useState(defaultFormThree);

  //get the formId passed as a query parameter
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const formId = parseInt(searchParams.get("form_id")!);

  // function for advancing to the next form.. prevents advance when errors
  const nextForm = () => {
    switch (formId) {
      case 1:
        if (anyError(formOneState.emailError)) {
          alert("an error in input");
          return;
        }
        break;
      case 2:
        if (
          anyError(formTwoState.addressErr) ||
          anyError(formTwoState.firstNameErr) ||
          anyError(formTwoState.lastNameErr) ||
          anyError(formTwoState.phoneNumErr)
        ) {
          alert("an error in input");
          return;
        }
        break;
      case 3:
        if (anyError(formThreeState.passwordErr)) {
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
        return <FormOne formData={formOneState} setter={setFormOneState} />;
      case 2:
        return <FormTwo formData={formTwoState} setter={setFormTwoState} />;
      case 3:
        return (
          <FormThree formData={formThreeState} setter={setFormThreeState} />
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
