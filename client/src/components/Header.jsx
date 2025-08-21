import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useGameContext } from '@/contexts/GameContext';

const Header = () => {
    const location = useLocation();
    let score = 0;
    try {
        if (location.pathname !== '/') {
            const gameContext = useGameContext();
            score = gameContext.score;
        }
    } catch (error) {
        console.error("Error accessing game context:", error);
    }

    return (
        <header className={location.pathname === '/' ? 'hidden' : ''}>
            <div className="container flex items-center justify-between py-[1rem] text-[2rem] text-white font-syne">
                <Link to='/' className="hover:no-underline">Coding Quiz!</Link>
                {/* <p className=''>Score: {score}</p> */}
            </div>
        </header>
    )
}

export default Header;