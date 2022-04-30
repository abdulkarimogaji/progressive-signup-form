import { Box, Typography } from "@mui/material";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useSearchParams } from "react-router-dom";
const initialValues = {
  firstName: "",
  lastName: "",
  Address: "",
  nickName: "",
  phoneNum: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("This field is required"),
  lastName: Yup.string().required("This field is required"),
  address: Yup.string().required("This field is required").min(10),
  phoneNum: Yup.string().required("This field is required"),
  nickName: Yup.string(),
});

const FormTwo = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = () => {
    setSearchParams({ form_id: "3" });
  };

  return (
    <Box>
      <Typography
        variant="h5"
        fontWeight="bold"
        color="secondary"
        align="center"
        gutterBottom
      >
        Personal Information
      </Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className="form-formik">
          <Field name="firstName" placeholder="First Name" />
          <Box className="error-box">
            <ErrorMessage name="firstName" />
          </Box>

          <Field name="lastName" placeholder="Last Name" />
          <Box className="error-box">
            <ErrorMessage name="lastName" />
          </Box>

          <Field name="address" placeholder="Address" />
          <Box className="error-box">
            <ErrorMessage name="address" />
          </Box>

          <Field name="phoneNum" placeholder="Phone Number" />
          <Box className="error-box">
            <ErrorMessage name="phoneNum" />
          </Box>

          <Field name="nickName" placeholder="NickName" />
          <Box className="error-box">
            <ErrorMessage name="nickName" />
          </Box>

          <input type="submit" id="formSubmit" className="submit-hidden" />
        </Form>
      </Formik>
    </Box>
  );
};
export default FormTwo;
