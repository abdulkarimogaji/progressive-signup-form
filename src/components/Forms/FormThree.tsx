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
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <Form>
        <Field name="password" placeholder="password" type="password" />
        <ErrorMessage name="password" />
        <Field
          name="password2"
          placeholder="password confirmation"
          type="password"
        />
        <ErrorMessage name="password2" />
        <input type="submit" id="formSubmit" />
      </Form>
    </Formik>
  );
};
export default FormThree;
