import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Title from "./Title";
import InsuredsData from "../services/Insureds-data";
import InsuredsHeaders from "../services/Insureds-headers";

// styles
const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: 20,
    marginBottom: 20,
  },
}));

export default function TableData() {
  const classes = useStyles();
  const headers = InsuredsHeaders();
  const rows = InsuredsData();

  return (
    <React.Fragment>
      <Title className={classes.title}>Asegurados</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell key={header.id}>{header.name}</TableCell>
            ))}
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  className={classes.button}
                  startIcon={<VisibilityIcon />}
                >
                  Ver
                </Button>
                <Tooltip title="Editar" placement="top">
                  <IconButton aria-label="edit">
                    <EditIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Eliminar" placement="top">
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
