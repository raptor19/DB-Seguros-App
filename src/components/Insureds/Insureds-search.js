import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form, Field } from "formik";
import { LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import Title from "../Title";

export default function InsuredSearch() {
  // estilos
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(0),
        width: 300,
      },
    },
    button: {
      marginTop: 20,
      marginBottom: 20,
    },
  }));
  const classes = useStyles();

  const initialSearchForm = { surname: "", dni: "" };

  const formSearchSchema = Yup.object().shape({
    surname: Yup.string()
      .max(40, "apellido demasiado largo")
      .min(2, "apellido demasiado corto"),
    dni: Yup.string()
      .max(9, "Dni incorrecto! demasiado largo")
      .min(7, "Dni incorrecto! demasiado corto"),
  });

  

  const handleSubmit = (values, setSubmitting, resetForm) => {
    console.log("entro Submit");
    setTimeout(() => {
      setSubmitting(false);
      alert(JSON.stringify(values, null, 2));
    }, 500);
    resetForm();
  };

  // state

  return (
    <React.Fragment>
      <Title>Consultar Asegurado</Title>
      <Formik
        initialValues={initialSearchForm}
        validationSchema={formSearchSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handleSubmit(values, setSubmitting, resetForm);
        }}
      >
        {({ errors,  isSubmitting }) => (
          <Form className={classes.form}>
            <Field
              component={TextField}
              name="surname"
              type="text"
              label="Apellido"
            />
            <br />
            <Field component={TextField} name="dni" type="text" label="DNI" />
            {isSubmitting && <LinearProgress />}
            <br />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={isSubmitting}
              type="submit"
            >
              Buscar
            </Button>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
}
