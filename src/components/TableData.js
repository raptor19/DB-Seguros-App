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
import VisibilityIcon from "@material-ui/icons/Visibility";
import Title from "./Title";
import DialogInfo from "../components/DialogInfo";

// styles
const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: 20,
    marginBottom: 20,
  },
}));

export default function TableData({ data, title, headers, editData, deleteData }) {
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
                <Tooltip title="Editar" placement="top">
                  <IconButton aria-label="edit" onClick={editData(row)}>
                    <EditIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Eliminar" placement="top">
                  <IconButton aria-label="delete" onClick={deleteData(row)}>
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
