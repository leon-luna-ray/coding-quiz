import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GameProvider, useGameContext } from '@/contexts/GameContext';

const HeaderContent = () => {
    const location = useLocation();
    const { score } = useGameContext();

    return (
        <header className={location.pathname === '/' ? 'hidden' : ''}>
            <div className="container flex items-center justify-between py-[1rem] text-[2rem] text-white font-syne">
                <Link to='/' className="hover:no-underline">Coding Quiz!</Link>
                <p className=''>Score: {score}</p>
            </div>
        </header>
    )
}

const Header = () => {
    return (
        <GameProvider>
            <HeaderContent />
        </GameProvider>
    )
}

export default Header;

