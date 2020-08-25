import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Title from "./Title";
import DialogInfo from "../components/DialogInfo";
import DialogConfirm from "./DialogConfirm";

// styles
const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: 20,
    marginBottom: 20,
  },
}));

export default function TableData({ data, title, headers, editData }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title className={classes.title}>{title}</Title>
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
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.surname}</TableCell>
              <TableCell>{row.dni}</TableCell>
              <TableCell>{row.dateofBirth}</TableCell>
              <TableCell>
                <DialogInfo
                  title="Detalle"
                  object={row}
                  textButton="Ver"
                  icon={<VisibilityIcon />}
                />
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<EditIcon/>}
                  size="small"
                  onClick={() => editData(row)}
                >
                  Editar
                </Button>
                <DialogConfirm
                  title="Confirmar accion"
                  text="Realmente desea eliminar el asegurado?"
                  object={row}
                  textButton="Eliminar"
                  icon={<DeleteIcon />}
                  nameFunction="deleteInsured"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
