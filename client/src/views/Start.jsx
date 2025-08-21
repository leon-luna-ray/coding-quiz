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
          <Link className='btn tertiary bg-c' to='/quiz/c'>C</Link>
          <Link className='btn secondary bg-csharp' to='/quiz/csharp'>C#</Link>
          <Link className='btn bg-cpp' to='/quiz/cpp'>C++</Link>
          <Link className='btn bg-css' to='/quiz/css'>CSS</Link>
          <Link className='btn bg-elixir' to='/quiz/elixir'>Elixir</Link>
          <Link className='btn bg-go' to='/quiz/go'>Go</Link>
          <Link className='btn tertiary bg-html' to='/quiz/html'>HTML</Link>
          <Link className='btn bg-java' to='/quiz/java'>Java</Link>
          <Link className='btn secondary bg-javascript' to='/quiz/javascript'>JavaScript</Link>
          <Link className='btn bg-php' to='/quiz/php'>PHP</Link>
          <Link className='btn bg-python' to='/quiz/python'>Python</Link>
          <Link className='btn bg-rust' to='/quiz/rust'>Rust</Link>
          <Link className='btn bg-sql' to='/quiz/sql'>SQL</Link>
          <Link className='btn bg-swift' to='/quiz/swift'>Swift</Link>
          <Link className='btn bg-typescript' to='/quiz/typescript'>TypeScript</Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
