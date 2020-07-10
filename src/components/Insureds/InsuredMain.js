import React, { useState, useEffect } from "react";
//import useFetch from "../../Hooks/useFetch";
import clsx from "clsx";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import InsuredEdit from "./InsuredEdit";
import InsuredsAdd from "./InsuredAdd";
import InsuredsSearch from "./InsuredSearch";
import TableData from "../TableData";
import InsuredsData from "../../services/Insureds-data";
import InsuredHeaders from "../../services/Insureds-headers";
import PubSub from "pubsub-js";
import { useStyles } from "../Insureds/InsuredMainStyles";

const InsuredsMain = () => {
  const [insuredsSearched, setInsuredsSearched] = useState([]);
  const [insuredDelete, setInsuredDelete] = useState({});
  const [insuredHeaders, setInsuredsHeaders] = useState([]);
  const [searchData, setSearchData] = useState({});
  const [editing, setEditing] = useState({});

  useEffect(() => {
    setInsuredsHeaders(InsuredHeaders());
    //Aca tengo que hacer la peticion para buscar el o los Asegurados de la busqueda
    PubSub.subscribe("search", (e, data) => {
      setSearchData(data);
      console.log(searchData);
    });
    PubSub.subscribe("deleteInsured", (e, data) => {
      setInsuredDelete(data);
      console.log(insuredDelete);
    });
    if (searchData != null) {
      //setInsuredsSearched(searchInsureds());
    }
    setInsuredsSearched(InsuredsData());
    return () => {
      PubSub.unsubscribe("search");
      PubSub.unsubscribe("deleteInsured");
    };
  }, [insuredsSearched, searchData, insuredDelete, editing]);

  // Agregar Asegurado
  const addInsured = (insured) => {
    alert(insured);
  };

  // Editar Asegurado
  const editInsured = (insured) => {
    alert(insured.name);
  };

  // Eliminar Asegurado
  const deleteInsured = (insured) => {
    alert(insured.name);
  };

  // Buscar Asegurados
  /*const searchInsureds = () => {
    const res = [];
      switch(searchData.label) {
        case 'DNI': const [insured,isInsured] = useFetch("      " + searchData.value,{})
                    res.push(isnured)[break;]
        case 'Apellido': const [insureds,isInsureds] = useFetch("" + searchData.value,[])
                    res = insureds;[break;]
        default: res.push('error')[break;] 
      }
    return res;
  };*/

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={2}>
        {/* Buscar un Asegurado */}
        <Grid item xs={12} md={4} lg={4}>
          <Paper className={fixedHeightPaper}>
            <InsuredsSearch />
          </Paper>
        </Grid>
        {/* Agregar y modificar Asegurado */}
        <Grid item xs={12} md={8} lg={8}>
          <Paper className={fixedHeightPaper}>
            {editing === null ? (
              <InsuredEdit setEditing={setEditing} insured={editing} />
            ) : (
              <InsuredsAdd addInsured={addInsured} />
            )}
          </Paper>
        </Grid>
        {/* Resultado de la busqueda */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <TableData
              headers={insuredHeaders}
              title="Resultado de Busqueda"
              data={insuredsSearched}
              editData={editInsured}
              deleteData={deleteInsured}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default InsuredsMain;
