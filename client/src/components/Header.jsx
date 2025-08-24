import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useGameContext } from '@/contexts/GameContext';

const Header = () => {
    const location = useLocation();
    const { score, quizType } = useGameContext();

    return (
        <header className={location.pathname === '/' ? 'hidden' : ''}>
            <div className="container flex items-center justify-between py-[1rem] text-[2rem] text-white font-syne">
                <Link to='/' className="hover:no-underline flex gap-[0.5rem] items-center">
                    <p>CodingQuiz!</p>
                </Link>
                {quizType.name && (
                    <div className="flex flex-col text-[1.5rem]">
                        <p className='tracking-[0.5px]'>{quizType.name} | Score {score}</p>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header;