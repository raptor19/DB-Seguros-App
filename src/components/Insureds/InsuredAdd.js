import React from "react";
import { Button, LinearProgress } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Title from "../Title";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import { useStyles } from "../Insureds/InsuredAddStyles";
import MySelect from "../MySelect";

const numericRegex = /^[0-9]*$/;
const letterscaseRegex = /^[A-Za-z]+$/i;

//const minDate = new Date("1900-01-01");

const initialForm = {
  name: "",
  surname: "",
  dni: "",
  dateBirth: null,
  gender: "",
  adress: "",
  phone: "",
  email: "",
  civilState: "",
  occupation: "",
};

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "El nombre debe tener minimo 3 letras")
    .max(20, "El nombre debe tener maximo 20 letras")
    .matches(letterscaseRegex, "Solo letras")
    .required("Debe ingresar un nombre"),
  surname: Yup.string()
    .min(3, "El dni debe tener minimo 3 letras")
    .max(20, "El dni debe tener maximo 20 letras")
    .matches(letterscaseRegex, "Solo letra")
    .required("Debe ingresar un apellido"),
  dni: Yup.string()
    .min(7, "El dni debe tener minimo 7 digitos")
    .max(8, "El dni debe tener maximo 8 digitos")
    .matches(numericRegex, "Solo numeros")
    .required("Debe ingresar un dni"),
  dateBirth: Yup.date()
    //.min(minDate, "Solo fechas posteriores a 1900")
    .required("Debe ingresar una fecha"),
  gender: Yup.string()
    .required("Debe seleccionar un sexo")
    .oneOf(["Masculino", "Femenino", "Otro"], "Sexo invalido"),
  adress: Yup.string()
    .min(5, "La direccion debe tener minimo 5 caracteres")
    .max(30, "La direccion debe tener maximo 30 caracteres")
    .required("Debe ingresar una direccion"),
  phone: Yup.string()
    .min(3, "El telefono debe tener minimo 10 digitos")
    .max(20, "El telefono debe tener maximo 12 digitos")
    .matches(numericRegex, "Solo numeros")
    .required("Debe ingresar un telefono"),
  email: Yup.string()
    .email("Debe ingresar un email valido")
    .required("Debe ingresar un email"),
  civilState: Yup.string()
    .required("Debe seleccionar un estado civil")
    .oneOf(["Soltero", "Casado","Viudo", "Otro"], "Estado civil invalido"),
  occupation: Yup.string()
    .min(5, "La ocupacion debe tener minimo 5 letras")
    .max(20, "La ocupacion debe tener maximo 20 letras")
    .matches(letterscaseRegex, "Solo letras")
    .required("Debe ingresar una ocupacion"),
});

const InsuredsAdd = (props) => {
  const handleSubmit = (values, setSubmitting, resetForm) => {
    setTimeout(() => {
      setSubmitting(false);
      alert(JSON.stringify(values, null, 2));
    }, 500);
    resetForm();
  };
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Crear Asegurado</Title>
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
              name="name"
              type="text"
              label="Nombre"
              className={classes.textField}
            />
            <Field
              component={TextField}
              name="surname"
              type="text"
              label="Apellido"
              className={classes.textField}
            />
            <Field
              component={TextField}
              name="dni"
              type="text"
              label="DNI"
              className={classes.textField}
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                className={classes.formControl}
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="inputDateOfBirthAddInsured"
                label="Fecha de Nacimiento"
                name="dateBirth"
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
            <FormControl className={classes.formControl}>
              <MySelect label="Sexo" name="gender">
                <MenuItem value="Masculino">Masculino</MenuItem>
                <MenuItem value="Femenino">Femenino</MenuItem>
                <MenuItem value="Otro">Otro</MenuItem>
              </MySelect>
            </FormControl>

            <Field
              component={TextField}
              name="adress"
              type="text"
              label="Direccion"
              className={classes.textField}
            />
            <Field
              component={TextField}
              name="phone"
              type="text"
              label="Telefono"
              className={classes.textField}
            />
            <Field
              component={TextField}
              name="email"
              type="text"
              label="Email"
              className={classes.textField}
            />

            <FormControl className={classes.formControl}>
              <MySelect label="Estado Civil" name="civilState">
                <MenuItem value="Soltero">Soltero</MenuItem>
                <MenuItem value="Casado">Casado</MenuItem>
                <MenuItem value="Viudo">Viudo</MenuItem>
                <MenuItem value="Otro">Otro</MenuItem>
              </MySelect>
            </FormControl>
            <Field
              component={TextField}
              name="occupation"
              type="text"
              label="Ocupacion"
              className={classes.textField}
            />
            {isSubmitting && <LinearProgress />}
            <br />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              Crear
            </Button>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default InsuredsAdd;
