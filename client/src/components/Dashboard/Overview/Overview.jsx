import React from 'react';

// styled components
import StyledOverview from './StyledOverview';

const Overview = () => {
    return (
        <StyledOverview>
            <div className='overview'>
                <div className='ongoingLecture'></div>
                <div className='badges'></div>
            </div>
        </StyledOverview>
    );
};

export default Overview;
