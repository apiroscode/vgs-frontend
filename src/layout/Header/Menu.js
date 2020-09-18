import React from "react";

import { Link } from "react-router-dom";

import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  SwipeableDrawer,
} from "@material-ui/core";
import {
  HelpOutlined,
  HomeOutlined,
  InfoOutlined,
  MenuOutlined,
  RedeemOutlined,
} from "@material-ui/icons";

import { useOpen } from "@/utils/hooks";

const useStyles = makeStyles((theme) => ({
  container: { width: theme.spacing(32) },
}));

const Menu = () => {
  const [isOpen, onOpen, onClose, onToggle] = useOpen();
  const classes = useStyles();

  return (
    <>
      <IconButton color="secondary" onClick={onToggle}>
        <MenuOutlined />
      </IconButton>
      <SwipeableDrawer onClose={onClose} onOpen={onOpen} open={isOpen} anchor="left">
        <List className={classes.container}>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <HomeOutlined />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/products">
            <ListItemIcon>
              <RedeemOutlined />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>
          <ListItem button component={Link} to="/help">
            <ListItemIcon>
              <HelpOutlined />
            </ListItemIcon>
            <ListItemText primary="Help" />
          </ListItem>
          <ListItem button component={Link} to="/about">
            <ListItemIcon>
              <InfoOutlined />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </List>
      </SwipeableDrawer>
    </>
  );
};

export default Menu;
