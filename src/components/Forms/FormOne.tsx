import { Formik, Form, Field, ErrorMessage } from "formik";
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
  setSearchParams({ form_id: '2'});
    
  }
  return (
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
