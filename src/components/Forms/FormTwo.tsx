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
  address: Yup.string().required("This field is required").min(20),
  phoneNum: Yup.string().required("This field is required"),
  nickName: Yup.string(),
});

const FormTwo = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = () => {
    setSearchParams({ form_id: "3" });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <Field name="firstName" placeholder="First Name" />
        <ErrorMessage name="firstName" />
        <Field name="lastName" placeholder="Last Name" />
        <ErrorMessage name="lastName" />

        <Field name="address" placeholder="Address" />
        <ErrorMessage name="address" />

        <Field name="phoneNum" placeholder="Phone Number" />
        <ErrorMessage name="phoneNum" />

        <Field name="nickName" placeholder="NickName" />
        <ErrorMessage name="nickName" />

        <input type="submit" id="formSubmit" />
      </Form>
    </Formik>
  );
};
export default FormTwo;
