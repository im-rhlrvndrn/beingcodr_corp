import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

// Styled components
import StyledNav from './StyledNav';

const Nav = () => {
    let userId = Cookies.get('userId');

    return (
        <StyledNav>
            <div className='navWrapper'>
                <a href='/' className='navWrapper__logo'>
                    <img src='https://www.masaischool.com/static/img/logo.svg' alt='logo' />
                </a>
                <div className='navWrapper__navItems'>
                    <div className='navWrapper__navItems__navItemsWrapper'>
                        <div className='navWrapper__navItems__navItemsWrapper__navLinks'>
                            <ul>
                                <Link to='/dashboard/courses'>courses</Link>
                                <Link to='/dashboard/pricing'>fees</Link>
                                <Link to='/dashboard'>dashboard</Link>
                                {userId && <Link to='/dashboard'>dashboard</Link>}
                            </ul>
                        </div>
                        {userId ? (
                            <div className='navWrapper__navItems__navItemsWrapper__manageSettings'>
                                <img id='userProfile' src='http://bit.ly/37GpucP' alt='' />
                            </div>
                        ) : (
                            <div className='navWrapper__navItems__navItemsWrapper__navAuth'>
                                <Link to='/auth'>login</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </StyledNav>
    );
};

export default Nav;
