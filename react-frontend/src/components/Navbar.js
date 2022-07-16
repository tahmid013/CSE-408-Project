import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { useAuth } from '../hooks/useAuth';
import './Navbar.css';


function Navbar() {
    const [Click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!Click)
    const closeMobileMenu = () => setClick(false);

    const {authData } = useAuth();

    const showButton = () => {

        if (window.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);


    return (
        <>
            <nav className='navbar'>

                <div className='navbar-container'>
                   
                        <Link to="/" className='navbar-logo'>
                            Brainia<h4 id='logo-deep-Blue'>Q</h4>s
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            <i className={Click ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </div>
                        <ul className={Click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/howitworks' className='nav-links' onClick={closeMobileMenu}>
                                    How it works
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/features' className='nav-links' onClick={closeMobileMenu}>
                                    Features
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                    About Us
                                </Link>
                            </li>
                            {!authData ? 
                            <li className='nav-item'>
                                <Link to='/signin' className='nav-links-mobile' onClick={closeMobileMenu}>
                                    Sign In
                                </Link>
                            </li>
                             :
                             <li className='nav-item'>
                                <Link to = '/signin' className='nav-links' onClick={closeMobileMenu}>
                                logged in as : 
                                {authData.user ? 
                                <>
                                {authData.user.username} 
                                </>
                                : 
                                <></>
                                }
                                </Link>
                             </li>
                            }
                        </ul>
                        {!authData && 
                        <div>
                        {button && <Button path_name='signin' buttonStyle='btn--outline'>Sign In</Button>}
                        </div>
                        
                        }
                </div>
            </nav>
        </>
    )
}

export default Navbar