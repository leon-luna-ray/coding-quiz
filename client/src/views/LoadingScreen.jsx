import React from 'react';
import { useGameContext } from '@/contexts/GameContext';
import { LANGUAGE_ICONS } from '@/lib/languageIcons';

const LoadingScreen = () => {
  const { quizType } = useGameContext();
  const icon = LANGUAGE_ICONS[quizType.slug] || '❓';

  return (
    <div className='mx-auto flex justify-center items-center h-screen w-screen top-0 left-0 fixed flex-col-4'>
      <div className="flex justify-center w-full max-w-[300px] animate-pulse">
        <span
          style={{ fontSize: '4rem', fontFamily: 'inherit' }}
          className="language-icon text-white"
        >
          {icon}
        </span>
      </div>
      <h1 className='h3 uppercase'>Loading</h1>
    </div>
  );
};

export default LoadingScreen;