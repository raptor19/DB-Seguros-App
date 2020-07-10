import React from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import HttpsIcon from "@material-ui/icons/Https";
import BusinessIcon from "@material-ui/icons/Business";
import AssignmentIcon from "@material-ui/icons/Assignment";

const SuperAdminItems = ({match}) => {
  return (
    <List>
      <Link to={`${match.url}/reports`}>
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Reportes" />
        </ListItem>
      </Link>

      <Link to={`${match.url}/insurers`}>
        <ListItem button>
          <ListItemIcon>
            <HttpsIcon />
          </ListItemIcon>
          <ListItemText primary="Aseguradoras" />
        </ListItem>
      </Link>

      <Link to={`${match.url}/users`}>
        <ListItem button>
          <ListItemIcon>
            <PeopleOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Usuarios" />
        </ListItem>
      </Link>

      <Link to={`${match.url}/offices`}>
        <ListItem button>
          <ListItemIcon>
            <BusinessIcon />
          </ListItemIcon>
          <ListItemText primary="Oficinas" />
        </ListItem>
      </Link>
    </List>
  );
};

export default SuperAdminItems;
