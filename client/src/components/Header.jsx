import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    return (
        <header className={location.pathname === '/' ? 'hidden' : ''}>
            <div className="container flex items-center max-md:justify-center justify-between py-[1rem]">
                <Link to='/' className="h3 hover:no-underline">Coding Quiz!</Link>
            </div>
        </header>
    )
}

export default Header;
