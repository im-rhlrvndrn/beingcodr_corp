import React from 'react';

// styled-components
import StyledUpperDashNav from './StyledUpperDashNav';

const UpperDashNav = ({ dashState }) => {
    return (
        <StyledUpperDashNav>
            {/* <div></div> */}
            <p className='headLine'>{dashState}</p>
            <div className='userDetails'>
                <p>Rahul Ravindran</p>
                <img
                    src='https://images.pexels.com/photos/1529619/pexels-photo-1529619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                    alt='hello'
                />
            </div>
        </StyledUpperDashNav>
    );
};

export default UpperDashNav;
