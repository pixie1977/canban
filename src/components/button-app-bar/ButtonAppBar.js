import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TooltipTrigger from 'react-popper-tooltip';
import 'react-popper-tooltip/dist/styles.css';
import './ButtonAppBar.css';

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

const Trigger = (props) => {
    const {getTriggerProps, triggerRef} = props;
    return (
        <div
            {...getTriggerProps({
                ref: triggerRef,
                className: 'trigger'
            })}
        >
            <svg width="64" height="40" viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="white"/>
                <g clipPath="url(#clip0)">
                    <path
                        d="M20 39.2C30.6039 39.2 39.2 30.6039 39.2 20C39.2 9.39612 30.6039 0.799988 20 0.799988C9.39612 0.799988 0.799988 9.39612 0.799988 20C0.799988 30.6039 9.39612 39.2 20 39.2Z"
                        stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                    <path
                        d="M23.9464 28.4224C23.8296 27.1328 23.8744 26.2328 23.8744 25.0544C24.4584 24.748 25.5048 22.7944 25.6816 21.144C26.1408 21.1064 26.8648 20.6584 27.0768 18.8896C27.1912 17.94 26.7368 17.4056 26.46 17.2376C27.2072 14.9904 28.7592 8.03841 23.5896 7.32001C23.0576 6.38561 21.6952 5.91281 19.9248 5.91281C12.8416 6.04321 11.9872 11.2616 13.54 17.2376C13.264 17.4056 12.8096 17.94 12.9232 18.8896C13.136 20.6584 13.8592 21.1064 14.3184 21.144C14.4944 22.7936 15.5824 24.748 16.168 25.0544C16.168 26.2328 16.212 27.1328 16.0952 28.4224C15.0864 31.1344 9.90561 31.3464 6.91681 33.9616C10.0416 37.108 15.1056 39.3584 20.4496 39.3584C25.7936 39.3584 32.0752 35.1392 33.1208 33.988C30.1504 31.3488 24.9576 31.144 23.9464 28.4224Z"
                        fill="black"/>
                </g>
                <g clipPath="url(#clip1)">
                    <path d="M47.415 23.79L52 19.205L56.585 23.79L58 22.375L52 16.375L46 22.375L47.415 23.79Z"
                          fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0">
                        <rect width="40" height="40" fill="white"/>
                    </clipPath>
                    <clipPath id="clip1">
                        <rect width="24" height="24" transform="matrix(1 0 0 -1 40 32)" fill="white"/>
                    </clipPath>
                </defs>
            </svg>

        </div>
    );
};

const Tooltip = (setAuthorizedHandler) => {

    return function ({
                         getTooltipProps,
                         getArrowProps,
                         tooltipRef,
                         arrowRef,
                         placement
                     }) {
        return (
            <div
                {...getTooltipProps({
                    ref: tooltipRef,
                    className: 'tooltip-container roundSquare'
                })}
            >
                <div
                    {...getArrowProps({
                        ref: arrowRef,
                        'data-placement': placement,
                        className: 'tooltip-arrow'
                    })}
                />
                <div className='tooltip-body'>
                    <div className='tooltipItem'>Profile</div>
                    <div className='tooltipItem' onClick={() => {
                        setAuthorizedHandler(false);
                    }}>Log Out
                    </div>
                </div>
            </div>
        );
    }
};

const Avatar = ({setAuthorizedHandler}) => {
    return (
        <TooltipTrigger placement="bottom" trigger="click" tooltip={Tooltip(setAuthorizedHandler)}>
            {Trigger}
        </TooltipTrigger>
    )
};

const ButtonAppBar = (props) => {
    const {classes, isAuthorized, setAuthorizedHandler} = props;
    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' color='inherit' className={classes.grow}>
                        Awesome Kanban Board
                    </Typography>
                    {!isAuthorized && <Button color='inherit' onClick={() => {
                        setAuthorizedHandler(true);
                    }}>Login</Button>}
                    {isAuthorized && <Avatar setAuthorizedHandler={setAuthorizedHandler}/>}
                </Toolbar>
            </AppBar>
        </div>
    );
};

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export const TopStyledBar = withStyles(styles)(ButtonAppBar);