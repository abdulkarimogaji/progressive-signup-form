import { Formik, Form, Field, ErrorMessage } from "formik";
import { Box, Typography } from "@mui/material";
import * as Yup from "yup";
import { useSearchParams } from "react-router-dom";

const validationSchema = Yup.object({
  email: Yup.string()
    .required("This field is required")
    .email("Must provide a valid email Address"),
});
const initialState = {
  email: "",
};

const FormOne = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSubmit = () => {
    console.log("Submiited first Form");
    setSearchParams({ form_id: "2" });
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
        Email Address
      </Typography>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        initialValues={initialState}
      >
        <Form className="form-formik">
          <Field type="email" name="email" placeholder="Email Address" />
          <Box className="error-box">
            <ErrorMessage name="email" />
          </Box>
          <input type="submit" id="formSubmit" className="submit-hidden" />
        </Form>
      </Formik>
    </Box>
  );
};
export default FormOne;
