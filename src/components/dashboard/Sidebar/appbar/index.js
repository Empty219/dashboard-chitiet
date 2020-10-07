import { Badge, Typography, withStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import NotificationsIcon from "@material-ui/icons/Notifications";
import clsx from "clsx";
import PropTypes from "prop-types";
import React, { Component } from "react";
import styles from "./styles";

class appbar extends Component {
  toggleSidebar = () => {
    const { showSidebar, ontoggleSidebar } = this.props;
    if (ontoggleSidebar) {
      ontoggleSidebar(!showSidebar);
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.AppBar}>
          <Toolbar>
            <div className={clsx(classes.image)}>
              <IconButton onClick={this.toggleSidebar}>
                <img
                  src="https://i.imgur.com/dHDXRY2.png"
                  alt=""
                  width="60%"
                ></img>
              </IconButton>
            </div>
            <Typography
              className={classes.title}
              variant="h6"
              noWrap
            ></Typography>

            <IconButton aria-label="show 11 new notifications" color="inherit">
              <Badge badgeContent={11} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge color="secondary">
                <ExitToAppIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

appbar.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(appbar);
