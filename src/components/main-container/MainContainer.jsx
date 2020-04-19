import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors';
import './MainContainer.css';
import {ColumnContainer} from '../column-container/ColumnContainer';
import {columnsDescriptionDataService} from '../data/data-source';
import {TopStyledBar} from '../button-app-bar/ButtonAppBar';

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: 'white',
        },
    },
});

export const MainContainer = () => {
    const [auth, setAuth] = useState(false);
    return (
        <div data-node="main-container" className="mainContainer">
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <TopStyledBar isAuthorized={auth} setAuthorizedHandler={setAuth}/>
                <ColumnContainer
                    columnsDescription={columnsDescriptionDataService}
                    isAuthorized={auth}
                />
            </ThemeProvider>
            ,
        </div>
    );
};
