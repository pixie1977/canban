import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import 'react-popper-tooltip/dist/styles.css';
import './ButtonAppBar.css';
import {Avatar} from './subcomponents/Avatar';

const styles = {
    root: {
        flexGrow: 1,
        minWidth: 300,
    },
    grow: {
        flexGrow: 1,
        textAlign: 'left',
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

const ButtonAppBar = (props) => {
    const {classes, isAuthorized, setAuthorizedHandler} = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Awesome Kanban Board
                    </Typography>
                    {!isAuthorized && (
                        <Button
                            color="inherit"
                            onClick={() => {
                                setAuthorizedHandler(true);
                            }}
                        >
                            Login
                        </Button>
                    )}
                    {isAuthorized && (
                        <Avatar setAuthorizedHandler={setAuthorizedHandler}/>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export const TopStyledBar = withStyles(styles)(ButtonAppBar);
