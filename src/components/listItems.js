import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DescriptionIcon from "@material-ui/icons/Description";
import PeopleIcon from "@material-ui/icons/People";
import AssignmentIcon from "@material-ui/icons/Assignment";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import ReportIcon from "@material-ui/icons/Report";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import HttpsIcon from "@material-ui/icons/Https";
import BusinessIcon from "@material-ui/icons/Business";

export const adminListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Asegurados" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DirectionsCarIcon />
      </ListItemIcon>
      <ListItemText primary="Vehiculos" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DescriptionIcon />
      </ListItemIcon>
      <ListItemText primary="Polizas" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FormatListBulletedIcon />
      </ListItemIcon>
      <ListItemText primary="Operaciones" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReportIcon />
      </ListItemIcon>
      <ListItemText primary="Siniestros" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AttachMoneyIcon />
      </ListItemIcon>
      <ListItemText primary="Caja" />
    </ListItem>
  </div>
);

export const superAdminListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Reportes" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <HttpsIcon />
      </ListItemIcon>
      <ListItemText primary="Aseguradoras" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleOutlineIcon />
      </ListItemIcon>
      <ListItemText primary="Usuarios" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BusinessIcon />
      </ListItemIcon>
      <ListItemText primary="Oficinas" />
    </ListItem>
  </div>
);
