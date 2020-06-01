import * as React from "react";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";

const initialForm = { username: "", email: "", password: "" };

const formSchema = Yup.object().shape({
  username: Yup.string()
    .max(40, "Usuario demasiado largo")
    .required("Debe ingresar un usuario"),
  email: Yup.string()
    .email("Ingrese un email valido ")
    .max(50, "Email demasiado largo")
    .required("Debe ingresar un email"),
  password: Yup.string()
    .min(8, "La constraseña debe tener 8 caracteres")
    .required("Debe ingresar un password"),
});

const handleSubmit = (values, setSubmitting, resetForm ) => {
  setTimeout(() => {
    setSubmitting(false);
    alert(JSON.stringify(values, null, 2));
  }, 500);
  resetForm();
};

function FormExample() {
  return (
    <Formik
      initialValues={initialForm}
      validationSchema={formSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handleSubmit(values, setSubmitting, resetForm);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Field
            component={TextField}
            name="username"
            type="text"
            label="Usuario"
          />

          <Field
            component={TextField}
            name="email"
            type="email"
            label="Email"
          />
          <br />
          <Field
            component={TextField}
            type="password"
            label="Password"
            name="password"
          />
          {isSubmitting && <LinearProgress />}
          <br />
          <Button
            variant="contained"
            color="primary"
            disabled={isSubmitting}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default FormExample;
