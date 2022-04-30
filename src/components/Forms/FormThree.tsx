import { Box, Typography, Stack, Input } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import ErrorBox from "../ErrorBox";
import { setPassword, setPasswordErrs } from "../../features/user/userSlice";
import { useSearchParams } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from 'yup'



const initialValues = {

}
const validationSchema = Yup.object({
  password: Yup.string().required("THis field is requied").min(6),
  password2: Yup.string().required("THis field is requied")
})

const FormThree = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleSubmit = () => {
    setSearchParams({form_id:"4"})
  }
  const password = useSelector((state: RootState) => state.user.password)
  const passwordErrs = useSelector((state: RootState) => state.user.loginErrors.password)
  const dispatch = useDispatch()
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    var val = e.currentTarget.value
    dispatch(setPassword(val))
  }

  const handleConfirmation = (e: React.ChangeEvent<HTMLInputElement>) => {
    var val = e.currentTarget.value
    var validity = [
      {
        clause: "Password must be more than 6 characters",
        valid: password.length > 6
      },
      {
        clause: "Password must Match",
        valid: val === password
      }
    ]
    dispatch(setPasswordErrs(validity))
  }

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={validationSchema}>
      <Form>
        <Field name="password" placeholder="password" type="password" />
        <ErrorMessage name="password" />
        <Field name="password2" placeholder="password confirmation" type="password" />
        <ErrorMessage name="password2" />
        <input type="submit" id="formSubmit" />
      </Form>
    </Formik>
  );
};
export default FormThree;
