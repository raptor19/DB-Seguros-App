import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Title from "../Title";

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  formControl: {
    marginTop: 0,
    minWidth: 110,
    marginLeft: 5,
    marginRight: 5,
  },
  selectEmpty: {
    marginTop: 2,
  },
  textField: {
    marginLeft: 5,
    marginRight: 5,
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
  },
});

const InsuredsAdd = (props) => {
  const initialFormState = {
    name: "",
    surname: "",
    dni: "",
    dateBirth: null,
    gender: "",
    adress: "",
    phone: "",
    civilState: "",
    occupation: "",
  };
  const [insured, setInsured] = React.useState(initialFormState);

  const handleInputChange = (event) => {
    console.log(event);
    const value = event.target.value;
    const name = event.target.name;
    setInsured({ ...insured, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!insured.name || !insured.surname) return;
    props.addInsured(insured);
    setInsured(initialFormState);
  };
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Agregar Asegurados</Title>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div>
          <TextField
            id="inputNameAddInsured"
            className={classes.textField}
            label="Nombre"
            value={insured.name}
            onChange={handleInputChange}
          />
          <TextField
            id="inputSurnameAddInsured"
            className={classes.textField}
            label="Apellido"
            value={insured.surname}
            onChange={handleInputChange}
          />
          <TextField
            id="inputDNIAddInsured"
            className={classes.textField}
            label="DNI"
            value={insured.dni}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={classes.formControl}
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="inputDateOfBirthAddInsured"
              label="Fecha de Nacimiento"
              value={insured.dateBirth}
              onChange={handleInputChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>

          <FormControl className={classes.formControl}>
            <InputLabel id="inputGenderAddInsured">Sexo</InputLabel>
            <Select
              labelId="inputGenderAddInsured"
              id="inputInsuredGenderSelected"
              value={insured.gender}
              onChange={handleInputChange}
            >
              <MenuItem value="Masculino">Masculino</MenuItem>
              <MenuItem value="Femenino">Femenino</MenuItem>
              <MenuItem value="Otro">Otro</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="inputAdressAddInsured"
            className={classes.textField}
            label="Direccion"
            value={insured.adress}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <TextField
            id="inputPhoneAddInsured"
            className={classes.textField}
            label="Telefono"
            value={insured.phone}
            onChange={handleInputChange}
          />
          <FormControl className={classes.formControl}>
            <InputLabel id="inputCivilStateAddInsured">Estado Civil</InputLabel>
            <Select
              labelId="inputCivilStateAddInsured"
              id="inputCivilStateAddInsured"
              value={insured.civilState}
              onChange={handleInputChange}
            >
              <MenuItem value="Soltero">Soltero</MenuItem>
              <MenuItem value="Casado">Casado</MenuItem>
              <MenuItem value="Viudo">Viudo</MenuItem>
              <MenuItem value="Otro">Otro</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="inputOccupationAddInsured"
            className={classes.textField}
            label="Ocupacion"
            value={insured.occupation}
            onChange={handleInputChange}
          />
        </div>
        <Button
          variant="contained"
          className={classes.button}
          color="primary"
          type="submit"
        >
          Agregar
        </Button>
      </form>
    </React.Fragment>
  );
};

export default InsuredsAdd;
