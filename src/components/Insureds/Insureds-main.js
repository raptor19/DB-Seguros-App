import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import InsuredsAdd from "./insureds-add";
import InsuredsSearch from "./Insureds-search";
import TableData from "../Table-data";
import Crud from "../../pages/Crud";
import FormExample from "../../pages/FormExample";
import FormExamplePickers from "../../pages/FormExamplePickers";
import SearchPrincipal from "../../pages/Search-principal";

const drawerWidth = 240;
const InsuredsMain = () => {
  // styles
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },

    drawerPaper: {
      position: "relative",
      whiteSpace: "nowrap",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },

    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "column",
    },
    fixedHeight: {
      height: 300,
    },
  }));
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const addInsured = insured  => {
    alert(insured); 
  }

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={2}>
        {/* Buscar un Asegurado */}
        <Grid item xs={12} md={4} lg={4}>
          <Paper className={fixedHeightPaper}>
            <InsuredsSearch />
          </Paper>
        </Grid>
        {/* Agregar Asegurado */}
        <Grid item xs={12} md={8} lg={8}>
          <Paper className={fixedHeightPaper}>
            <InsuredsAdd addInsured={addInsured}/>
          </Paper>
        </Grid>
        {/* Resultado de la busqueda */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <TableData />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>            
            <Crud />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <FormExample />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <FormExamplePickers />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <SearchPrincipal />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default InsuredsMain;
