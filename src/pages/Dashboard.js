import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import AdminListItems from "../components/AdminItems";
import InsuredsMain from "../components/Insureds/InsuredMain";
import VehiclesMain from "../components/Vehicles/VehiclesMain";
import OperationsMain from "../components/Operations/OperationsMain";
import PoliciesMain from "../components/Policies/PoliciesMain";
import SuperAdminItems from "../components/SuperAdminItems";
import BoxesMain from "../components/Boxes/BoxesMain";
import SinistersMain from "../components/Sinisters/SinistersMain";
import UsersMain from "../components/Users/UsersMain";
import ReportsMain from "../components/Reports/ReportsMain";
import InsurersMain from "../components/Insurers/InsurersMain";
import OfficesMain from "../components/Offices/OfficesMain";
import { useStyles } from "../pages/DashboardStyles";

export default function Dashboard({ match }) {
  console.log("dashboard");
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            DB Seguros
          </Typography>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Router>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <AdminListItems match={match} />
          <Divider />
          <SuperAdminItems match={match} />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />

          <Switch>
            <Route path={`${match.url}/insureds`} component={InsuredsMain} />
            <Route path={`${match.url}/vehicles`} component={VehiclesMain} />
            <Route
              path={`${match.url}/operations`}
              component={OperationsMain}
            />
            <Route path={`${match.url}/policies`} component={PoliciesMain} />
            <Route path={`${match.url}/boxes`} component={BoxesMain} />
            <Route path={`${match.url}/sinisters`} component={SinistersMain} />
            <Route path={`${match.url}/reports`} component={ReportsMain} />
            <Route path={`${match.url}/insurers`} component={InsurersMain} />
            <Route path={`${match.url}/users`} component={UsersMain} />
            <Route path={`${match.url}/offices`} component={OfficesMain} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}
