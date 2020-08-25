import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Formik, Form, Field } from "formik";
import { LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import SubmitButton from "../../components/SubmitButton";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const initialForm = { email: "", password: "" };

const formSchema = Yup.object().shape({
  email: Yup.string()
    .email("Ingrese un email valido ")
    .max(50, "Email demasiado largo")
    .lowercase()
    .required("Debe ingresar un email"),
  password: Yup.string()
    .min(8, "La constraseña debe tener 8 caracteres")
    .required("Debe ingresar un password"),
});

const handleSubmit = (values, setSubmitting, resetForm) => {
  console.log(values)
  setSubmitting(false);
  resetForm();
};

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Ingresar
        </Typography>

        <Formik
          initialValues={initialForm}
          validationSchema={formSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            handleSubmit(values, setSubmitting, resetForm);
          }}
        >
          {({ submitForm, isSubmitting }) => (
            <Form className={classes.form}>
              <Field
                component={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                name="email"
                type="email"
                label="Email"
              />
              <br />
              <Field
                component={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                type="password"
                label="Password"
                name="password"
              />
              {isSubmitting && <LinearProgress />}
              <br />
              <SubmitButton
                style={classes.submit}
                disabled={isSubmitting}
                color="primary"
                textButton="Ingresar"
              />
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Olvidaste tu password?
                  </Link>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
      <Box mt={8}></Box>
    </Container>
  );
}
