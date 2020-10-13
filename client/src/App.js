import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styledcomponents/GlobalStyles';
import { darkTheme, lightTheme } from './styledcomponents/Theme';

// React components
import Nav from './components/Nav/Nav';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
    const [themeState, setThemeState] = useState('dark');
    const theme = {
        ...(themeState === 'light' ? lightTheme : darkTheme),
        breakpoints: {
            lg_tablet: 'max-width: 1100px',
            tablet: 'max-width: 770px',
            mobile: 'max-width: 510px',
            sm_mobile: 'max-width: 350px',
        },
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Router>
                <Switch>
                    <Route path='/' exact>
                        <Nav />
                        <div>home </div>
                    </Route>
                    <Route path='/dashboard'>
                        <Dashboard />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
