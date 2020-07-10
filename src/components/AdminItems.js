import React from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DescriptionIcon from "@material-ui/icons/Description";
import PeopleIcon from "@material-ui/icons/People";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import ReportIcon from "@material-ui/icons/Report";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

const AdminItems = ({ match }) => {
  return (
    
      <List>
        <Link to={`${match.url}/insureds`}>
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Asegurados" />
          </ListItem>
        </Link>

        <Link to={`${match.url}/vehicles`}>
          <ListItem button>
            <ListItemIcon>
              <DirectionsCarIcon />
            </ListItemIcon>
            <ListItemText primary="Vehiculos" />
          </ListItem>
        </Link>

        <Link to={`${match.url}/policies`}>
          <ListItem button>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Polizas" />
          </ListItem>
        </Link>

        <Link to={`${match.url}/operations`}>
          <ListItem button>
            <ListItemIcon>
              <FormatListBulletedIcon />
            </ListItemIcon>
            <ListItemText primary="Operaciones" />
          </ListItem>
        </Link>

        <Link to={`${match.url}/sinisters`}>
          <ListItem button>
            <ListItemIcon>
              <ReportIcon />
            </ListItemIcon>
            <ListItemText primary="Siniestros" />
          </ListItem>
        </Link>

        <Link to={`${match.url}/boxes`}>
          <ListItem button>
            <ListItemIcon>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary="Caja" />
          </ListItem>
        </Link>
      </List>
  
  );
};

export default AdminItems;
