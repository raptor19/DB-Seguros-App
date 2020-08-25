import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { TextField } from "formik-material-ui";
import PubSub from "pubsub-js";
import { LinearProgress } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const useStyles = makeStyles({
  button: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
  },
});

const initialFormDni = { dni: "" };
const initialFormSurname = { surname: "" };

const formSchemaDni = Yup.object().shape({
  search: Yup.string()
    .min(7, "El dni debe tener almenos 7 digitos")
    .max(9, "El dni debe tener maximo 9 digitos")
    .required("Debe ingresar un dni"),
});

const formSchemaSurname = Yup.object().shape({
  surname: Yup.string()
    .min(1, "apellido demasiado corto")
    .max(15, "apellido demasiado largo")
    .required("Debe ingresar un apellido"),
});

const SimpleSearchTwo = ({ label, returnOptions }) => {
  console.log(label);
  const classes = useStyles();

  const handleSubmit = (values, setSubmitting, resetForm) => {
    console.log(values);
    PubSub.publish("search", { label: label, value: values });
    console.log({ label: label, value: values });
    setSubmitting(false);
    resetForm();
  };

  return (
    <>
      {label === "DNI" ? (
        <Formik
          initialValues={initialFormDni}
          validationSchema={formSchemaDni}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            handleSubmit(values, setSubmitting, resetForm);
          }}
        >
          {({ submitForm, isSubmitting }) => (
            <Form className={classes.form}>
              <Field
                component={TextField}
                margin="normal"
                fullWidth
                name="dni"
                type="text"
                label="DNI"
              />
              <br />
              {isSubmitting && <LinearProgress />}
              <br />
              <Button
                variant="contained"
                color="primary"
                onClick={returnOptions}
                className={classes.button}
              >
                Volver
              </Button>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.submit}
                disabled={isSubmitting}
              >
                Buscar
              </Button>
            </Form>
          )}
        </Formik>
      ) : (
        <Formik
          initialValues={initialFormSurname}
          validationSchema={formSchemaSurname}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            handleSubmit(values, setSubmitting, resetForm);
          }}
        >
          {({ submitForm, isSubmitting }) => (
            <Form className={classes.form}>
              <Field
                component={TextField}
                margin="normal"
                fullWidth
                name="apellido"
                type="text"
                label="Apellido"
              />
              <br />
              {isSubmitting && <LinearProgress />}
              <br />
              <Button
                variant="contained"
                color="primary"
                onClick={returnOptions}
                className={classes.button}
              >
                Volver
              </Button>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.submit}
                disabled={isSubmitting}
              >
                Buscar
              </Button>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default SimpleSearchTwo;
