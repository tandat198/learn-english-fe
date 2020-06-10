import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuRounded from "@material-ui/icons/MenuRounded";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import BookIcon from "@material-ui/icons/BookRounded";
import DropDown from "@material-ui/icons/ArrowDropDownRounded";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    sideBar: {
        width: 250,
    },
}));

const Header = () => {
    const [activeDrawer, setActiveDrawer] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const openRightMenu = Boolean(anchorEl);

    const toggleDrawer = () => {
        setActiveDrawer(!activeDrawer);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenu = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <MenuRounded className={classes.menuButton} fontSize='large' onClick={toggleDrawer} />
                    <Typography className={classes.title} variant='h6'>
                        LTTA
                    </Typography>
                    <div>
                        {/* <IconButton aria-label='account of current user' aria-controls='menu-appbar' aria-haspopup='true' onClick={handleMenu} color='inherit'>
                            <AccountCircle />
                            <DropDown />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={openRightMenu}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu> */}
                        <Button color='inherit'>Đăng nhập</Button>
                        <Button color='inherit'>Đăng ký</Button>
                    </div>
                </Toolbar>
            </AppBar>

            <Drawer anchor='left' open={activeDrawer} onClose={toggleDrawer}>
                <div className={classes.sideBar} role='presentation' onClick={toggleDrawer} onKeyDown={toggleDrawer}>
                    <List>
                        {["Lớp 6", "Lớp 7", "Lớp 8", "Lớp 9"].map((text) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    <BookIcon />
                                </ListItemIcon>
                                <ListItemText primary={text.toUpperCase()} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
        </div>
    );
};

export default Header;
