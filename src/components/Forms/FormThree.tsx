import { Box, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {};
const validationSchema = Yup.object({
  password: Yup.string().required("THis field is requied").min(6),
  password2: Yup.string().required("THis field is requied"),
});

const FormThree = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = () => {
    setSearchParams({ form_id: "4" });
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
        Setup Password
      </Typography>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form className="form-formik">
          <Field name="password" placeholder="Password" type="password" />
          <Box className="error-box">
            <ErrorMessage name="password" />
          </Box>
          <Field
            name="password2"
            placeholder="Password confirmation"
            type="password"
          />
          <Box className="error-box">
            <ErrorMessage name="password2" />
          </Box>
          <input type="submit" id="formSubmit" className="submit-hidden" />
        </Form>
      </Formik>
    </Box>
  );
};
export default FormThree;
