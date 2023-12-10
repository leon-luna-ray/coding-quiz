import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="container flex items-center justify-between py-[2rem] absolute top-0">
                <Link to='/' className="h3 hover:no-underline">Coding Quiz!</Link>
            </div>
        </header>
    )
}

export default Header