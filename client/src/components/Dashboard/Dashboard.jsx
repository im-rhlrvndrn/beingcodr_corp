import React from 'react';
import { Route } from 'react-router-dom';

// Styled components
import StyledDashboard from './StyledDashboard';

// React components
import DashboardNav from './DashboardNav/DashboardNav';
import DashboardComponent from './DashboardComponent/DashboardComponent';

const Dashboard = (props) => {
    console.log(props);
    return (
        <StyledDashboard>
            <DashboardNav />
            <>
                <Route exact path='/dashboard' component={DashboardComponent} />
                <Route exact path='/dashboard/:dashState' component={DashboardComponent} />
            </>
        </StyledDashboard>
    );
};

export default Dashboard;
