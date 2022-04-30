import { Box, Typography } from "@mui/material";

import { Formik, Form, Field, ErrorMessage, FormikValues } from "formik";
import * as Yup from "yup";

import { useSearchParams } from "react-router-dom";

const validationSchema = Yup.object({
  firstName: Yup.string().required("This field is required"),
  lastName: Yup.string().required("This field is required"),
  address: Yup.string()
    .required("This field is required")
    .min(11, "Should be more than 10 characters"),
  phoneNum: Yup.string().required("This field is required"),
  nickName: Yup.string(),
});

const FormTwo = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const prevParams = Object.fromEntries([...searchParams]);

  const initialValues = {
    firstName: searchParams.get("firstName") ?? "",
    lastName: searchParams.get("lastName") ?? "",
    address: searchParams.get("address") ?? "",
    nickName: searchParams.get("nickName") ?? "",
    phoneNum: searchParams.get("phoneNum") ?? "",
  };

  const handleSubmit = (values: FormikValues) => {
    setSearchParams(
      {
        ...prevParams,
        form_id: "3",
        firstName: values.firstName,
        lastName: values.lastName,
        address: values.address,
        phoneNum: values.phoneNum,
        nickname: values.nickName,
      },
      { replace: true }
    );
  };
  const goToPrevious = () => {
    setSearchParams({ ...prevParams, form_id: "1" }, { replace: true });
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
      <input
        type="submit"
        className="submit-hidden"
        id="previousBtn"
        onClick={goToPrevious}
        value=""
      />
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
