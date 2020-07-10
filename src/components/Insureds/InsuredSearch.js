import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Title from "../Title";
import Divider from "@material-ui/core/Divider";
import SimpleSearch from "../SimpleSearch";

export default function InsuredSearch() {
  // state
  const [searchSurname, setSearchSurname] = useState(false);
  const [searchDni, setSearchDni] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  const searchingDni = () => {
    setIsSearch(true);
    setSearchDni(true);
  };

  const searchingSurname = () => {
    setIsSearch(true);
    setSearchSurname(true);
  };

  const returnOptions = () => {
    setIsSearch(false);
  };

  return (
    <React.Fragment>
      <Grid container>
        <Grid container direction="column" justify="center" alignItems="center">
          <Title>Buscar Asegurado</Title>
          {!isSearch ? (
            <div>
              <Button
                variant="contained"
                color="primary"
                onClick={searchingSurname}
              >
                Por Apellido
              </Button>
              <Divider />
              <Button
                variant="contained"
                color="primary"
                onClick={searchingDni}
              >
                Por DNI
              </Button>
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
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
