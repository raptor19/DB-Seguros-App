import React from "react";
import { Button } from "@material-ui/core";
import Title from "../components/Title";
//import { Field } from "formik";
//import { TextField } from "formik-material-ui";

const SearchPrincipal = () => {
  // state
  const [searchSurname, setSearchSurname] = React.useState(false);
  const [searchDni, setSearchDni] = React.useState(false);
  const [search, setSearch] = React.useState(false);

  const searchingDni = () => {
    setSearch(true);
    setSearchDni(true);
  };

  const searchingSurname = () => {
    setSearch(true);
    setSearchSurname(true);
  };

  const returnOptions = () => {
    setSearch(false);
  };

  return (
    <React.Fragment>
      <Title>Consultar Asegurado</Title>
      {!search ? (
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={searchingSurname}
          >
            Buscar por Apellido
          </Button>
          <Button variant="contained" color="primary" onClick={searchingDni}>
            Buscar por DNI
          </Button>
        </div>
      ) : searchDni && !searchSurname ? (
        <div>
          <label htmlFor=""></label>
          <Button variant="contained" color="primary" onClick={returnOptions}>
            Volver
          </Button>
          <Button variant="contained" color="primary">
            Buscar
          </Button>
        </div>
      ) : (
        <div>
          <label htmlFor=""></label>
          <Button variant="contained" color="primary" onClick={returnOptions}>
            Volver
          </Button>
          <Button variant="contained" color="primary">
            Buscar
          </Button>
        </div>
      )}
    </React.Fragment>
  );
};

export default SearchPrincipal;
