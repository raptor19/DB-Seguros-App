import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import PubSub from 'pubsub-js'

const useStyles = makeStyles({
  textField: {
    marginLeft: 5,
    marginRight: 5,
  },
});

const SimpleSearch = ({ label, returnOptions }) => {
  const [value,setValue] = useState('');
  const classes = useStyles();

  const handleInputChange = (event) => {
    console.log(event);
    const value = event.target.value;
    const name = event.target.name;
    setValue({ ...value, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    PubSub.publish('search', { label: label, value: value})
    setValue('');
  }

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <div>
        <TextField
          id="inputNameAddInsured"
          className={classes.textField}
          label={label}
          value={value}
          onChange={handleInputChange}
        />
        <Button variant="contained" color="primary" onClick={returnOptions}>
          Volver
        </Button>
        <Button variant="contained" color="primary">
          Buscar
        </Button>
      </div>
    </form>
  );
};

export default SimpleSearch;