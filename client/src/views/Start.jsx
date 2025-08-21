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
          <Link className='btn c' to='/quiz/c'>C</Link>
          <Link className='btn csharp' to='/quiz/csharp'>C#</Link>
          <Link className='btn cpp' to='/quiz/cpp'>C++</Link>
          <Link className='btn css' to='/quiz/css'>CSS</Link>
          <Link className='btn elixir' to='/quiz/elixir'>Elixir</Link>
          <Link className='btn go' to='/quiz/go'>Go</Link>
          <Link className='btn html' to='/quiz/html'>HTML</Link>
          <Link className='btn java' to='/quiz/java'>Java</Link>
          <Link className='btn secondary javascript' to='/quiz/javascript'>JavaScript</Link>
          <Link className='btn php' to='/quiz/php'>PHP</Link>
          <Link className='btn python' to='/quiz/python'>Python</Link>
          <Link className='btn rust' to='/quiz/rust'>Rust</Link>
          <Link className='btn sql' to='/quiz/sql'>SQL</Link>
          <Link className='btn swift' to='/quiz/swift'>Swift</Link>
          <Link className='btn typescript' to='/quiz/typescript'>TypeScript</Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
