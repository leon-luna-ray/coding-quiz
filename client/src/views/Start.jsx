import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div className='container flex justify-center items-center'>
      <div className='flex-col-2 items-center justify-center border h-max py-8 px-12 rounded-xl'>
        <div>
          <h1>Coding Quiz!</h1>
        </div>
        <div className='flex-col-1 w-full grid grid-cols-3 gap-4'>
          <Link className='btn tertiary bg-[#555555]' to='/quiz/c'>C</Link>
          <Link className='btn secondary bg-[#178600]' to='/quiz/csharp'>C#</Link>
          <Link className='btn bg-[#f34b7d]' to='/quiz/cpp'>C++</Link>
          <Link className='btn bg-[#563d7c]' to='/quiz/css'>CSS</Link>
          <Link className='btn bg-[#6e4a7e]' to='/quiz/elixir'>Elixir</Link>
          <Link className='btn bg-[#00ADD8]' to='/quiz/go'>Go</Link>
          <Link className='btn tertiary bg-[#e34c26]' to='/quiz/html'>HTML</Link>
          <Link className='btn bg-[#b07219]' to='/quiz/java'>Java</Link>
          <Link className='btn secondary bg-[#f1e05a]' to='/quiz/javascript'>JavaScript</Link>
          <Link className='btn bg-[#4F5D95]' to='/quiz/php'>PHP</Link>
          <Link className='btn bg-[#3572A5]' to='/quiz/python'>Python</Link>
          <Link className='btn bg-[#dea584]' to='/quiz/rust'>Rust</Link>
          <Link className='btn bg-[#e38c00]' to='/quiz/sql'>SQL</Link>
          <Link className='btn bg-[#F05138]' to='/quiz/swift'>Swift</Link>
          <Link className='btn bg-[#3178c6]' to='/quiz/typescript'>TypeScript</Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
