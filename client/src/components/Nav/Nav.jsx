import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

// Styled components
import StyledNav from './StyledNav';

const Nav = () => {
    let userId = Cookies.get('userId');

    return (
        <StyledNav>
            <div class='navWrapper'>
                <a href='/' class='navWrapper__logo'>
                    <img src='https://www.masaischool.com/static/img/logo.svg' alt='logo' />
                </a>
                <div class='navWrapper__navItems'>
                    <div class='navWrapper__navItems__navItemsWrapper'>
                        <div class='navWrapper__navItems__navItemsWrapper__navLinks'>
                            <ul>
                                <Link to='/courses'>courses</Link>
                                <Link to='/pricing'>fees</Link>
                                {userId && <Link to='/dashboard'>dashboard</Link>}
                            </ul>
                        </div>
                        {userId ? (
                            <div className='navWrapper__navItems__navItemsWrapper__manageSettings'>
                                <img id='userProfile' src='http://bit.ly/37GpucP' alt='' />
                            </div>
                        ) : (
                            <Link class='navWrapper__navItems__navItemsWrapper__navAuth'>
                                <Link to='/auth'>login</Link>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </StyledNav>
    );
};

export default Nav;
