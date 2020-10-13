import React from 'react';
import { Link } from 'react-router-dom';

// styled-components
import StyledDashboardNav from './StyledDashboardNav';

const DashboardNav = () => {
    return (
        <StyledDashboardNav>
            <ul>
                <Link to='/' className='logo'>
                    logo
                </Link>
                <Link to='/dashboard'>overview</Link>
                <Link to='/dashboard/projects'>projects</Link>
                <Link to='/dashboard/courses'>courses</Link>
                <Link to='/dashboard/fees'>fees</Link>
            </ul>
        </StyledDashboardNav>
    );
};

export default DashboardNav;
