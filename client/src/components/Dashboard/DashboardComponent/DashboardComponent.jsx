import React from 'react';

// styled-components
import StyledDashboardComponent from './StyledDashboardComponent';

// React components
import UpperDashNav from './UpperDashNav/UpperDashNav';
import Overview from '../Overview/Overview';

const DashboardComponent = ({ match }) => {
    const dashState = match.params.dashState;

    return (
        <StyledDashboardComponent>
            <UpperDashNav dashState={dashState === undefined ? 'overview' : dashState} />
            {dashState === undefined && <Overview />}
            {dashState === 'projects' ? 'projects' : null}
        </StyledDashboardComponent>
    );
};

export default DashboardComponent;
