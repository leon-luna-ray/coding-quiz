import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="container flex items-center justify-between py-[2rem]">
                <Link to='/' class="h3 hover:no-underline">Coding Quiz!</Link>
            </div>
        </header>
    )
}

export default Header