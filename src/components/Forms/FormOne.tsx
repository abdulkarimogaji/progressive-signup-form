import {
  Box,
  Typography,
  Stack,
  TextField,
} from "@mui/material";
import { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { setEmail, setEmailErrors } from '../../features/user/userSlice'
import { validateEmail, anyError } from "./validations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ErrorBox from "../ErrorBox";
import * as Yup from 'yup'
import { useSearchParams } from "react-router-dom";


const validationSchema = Yup.object({
  email: Yup.string().required("This field is required").email("Must provide a valid email Address")
})
const initialState = {
  email: ""
}

const FormOne = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const handleSubmit = () => {
    console.log("Submitted");
  setSearchParams({ form_id: '2'});
    
  }
  // const [email, setEmail] = useState("")
  // const [emailErr, setEmailErr] = useState({} as myValidation)
  const emailErr = useSelector((state: RootState) => state.user.loginErrors.email)
  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value))
    var err = validateEmail(e.target.value);
    dispatch(setEmailErrors(err))
  };
  return (
    // <Box>
    //   <Typography
    //     variant="h5"
    //     color="secondary"
    //     fontWeight="bold"
    //     textAlign="center"
    //   >
    //     Email Address
    //   </Typography>
    //   <Stack spacing={3} p={3}>
    //     <TextField
    //       variant="standard"
    //       label="Email Address"
    //       error={anyError(emailErr)}
    //       required
    //       onChange={handleChange}
    //     ></TextField>
    //     <ErrorBox validation={emailErr} />
    //   </Stack>
    // </Box>
    <Formik onSubmit={handleSubmit} validationSchema={validationSchema} initialValues={initialState}>
      <Form>
        <Field type="email" name="email" placeholder="email" />
        <ErrorMessage name="email"/>
        <input type="submit" id="formSubmit" />
      </Form>
    </Formik>
  );
};
export default FormOne;
