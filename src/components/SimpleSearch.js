import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, LinearProgress } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import PubSub from "pubsub-js";

const useStyles = makeStyles({
  button: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 5,
  },
});

const initialFormDni = { dni: "" };
const initialFormSurname = { surname: "" };
const numericRegex = /^[0-9]*$/;
//const lowercaseRegex = /(?=.*[a-z])/;
//const uppercaseRegex = /(?=.*[A-Z])/;
const letterscaseRegex = /^[A-Za-z]+$/i;
//const numericRegex = /(?=.*[0-9])/;

const formSchemaDni = Yup.object().shape({
  dni: Yup.string()
    .min(7, "El dni debe tener minimo 7 digitos")
    .max(8, "El dni debe tener maximo 8 digitos")
    .matches(numericRegex, "Solo numeros")
    .required("Debe ingresar un dni"),
});

const formSchemaSurname = Yup.object().shape({
  surname: Yup.string()
    .min(3, "Apellido demasiado corto")
    .max(20, "Apellido demasiado largo")
    .matches(letterscaseRegex, "Solo texto")
    .required("Debe ingresar un Apellido"),
});

const SimpleSearch = ({ label, returnOptions }) => {
  //const classes = useStyles();
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
            <Form>
              <Field component={TextField} name="dni" type="text" label="DNI" />
              {isSubmitting && <LinearProgress />}
              <br />
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={returnOptions}
              >
                Volver
              </Button>
              <Button
                type="submit"
                variant="contained"
                className={classes.button}
                color="primary"
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
            <Form>
              <Field
                component={TextField}
                name="surname"
                type="text"
                label="Apellido"
              />
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
                type="submit"
                color="primary"
                disabled={isSubmitting}
                className={classes.button}
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

export default SimpleSearch;
