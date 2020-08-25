import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Title from "../Title";
import Divider from "@material-ui/core/Divider";
import SimpleSearch from "../SimpleSearch";

const useStyles = makeStyles({
  button: {
    marginTop: 8,
    marginButton: 8,
  },
});

export default function InsuredSearch({ clearSearching }) {
  const classes = useStyles();
  // state
  const [searchSurname, setSearchSurname] = useState(false);
  const [searchDni, setSearchDni] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  const searchingDni = () => {
    setIsSearch(true);
    setSearchDni(true);
    setSearchSurname(false);
  };

  const searchingSurname = () => {
    setIsSearch(true);
    setSearchSurname(true);
    setSearchDni(false);
  };

  const returnOptions = () => {
    setIsSearch(false);
  };

  return (
    <React.Fragment>
      <Title>Buscar Asegurado</Title>
      {!isSearch ? (
        <div>
          <Grid container>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={searchingSurname}
              >
                Apellido
              </Button>
              <Divider />
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={searchingDni}
              >
                DNI
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={clearSearching}
              >
                Limpiar Busqueda
              </Button>
            </Grid>
          </Grid>
        </div>
      ) : searchDni && !searchSurname ? (
        <div>
          <SimpleSearch label="DNI" returnOptions={returnOptions} />
        </div>
      ) : (
        <div>
          <SimpleSearch label="Apellido" returnOptions={returnOptions} />
        </div>
      )}
    </React.Fragment>
  );
}
