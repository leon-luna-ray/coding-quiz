import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div className='container flex justify-center items-center h-full md:mt-[8rem]'>
      <div className='flex flex-col items-center justify-center border h-max p-[1rem] md:py-8 md:px-12'>
        <div>
          <h1 className='h3'>Coding Quiz!</h1>
        </div>
        <div className="flex-col-2">
          <div className="flex flex-col">
            <h2 className='label-text text-center'>Web</h2>
            <div className='flex-col-1 w-full grid grid-cols-3 gap-4'>
              <Link className='btn html' to='/quiz/html'>HTML</Link>
              <Link className='btn css' to='/quiz/css'>CSS</Link>
              <Link className='btn javascript' to='/quiz/javascript'>JavaScript</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className='label-text text-center'>Multi-paradigm</h2>
            <div className='flex-col-1 w-full grid grid-cols-3 gap-4'>

              <Link className='btn go' to='/quiz/go'>Go</Link>
              <Link className='btn java' to='/quiz/java'>Java</Link>
              <Link className='btn php' to='/quiz/php'>PHP</Link>
              <Link className='btn python' to='/quiz/python'>Python</Link>
              <Link className='btn rust' to='/quiz/rust'>Rust</Link>
              <Link className='btn swift' to='/quiz/swift'>Swift</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className='label-text text-center'>Functional</h2>
            <div className='flex-col-1 w-full grid grid-cols-3 gap-4'>
              <Link className='btn haskell' to='/quiz/haskell'>Haskell</Link>
              <Link className='btn haskell' to='/quiz/haskell'>Haskell</Link>
              <Link className='btn erlang' to='/quiz/erlang'>Erlang</Link>
              <Link className='btn fsharp' to='/quiz/fsharp'>F#</Link>
              <Link className='btn clojure' to='/quiz/clojure'>Clojure</Link>
              <Link className='btn elm' to='/quiz/elm'>Elm</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className='label-text text-center'>C</h2>
            <div className='flex-col-1 w-full grid grid-cols-3 gap-4'>
              <Link className='btn c' to='/quiz/c'>C</Link>
              <Link className='btn cpp' to='/quiz/cpp'>C++</Link>
              <Link className='btn csharp' to='/quiz/csharp'>C#</Link>
              <Link className='btn objective-c' to='/quiz/objective-c'>Objective-C</Link>
              <Link className='btn csh' to='/quiz/csh'>C Shell</Link>
              <Link className='btn holyc' to='/quiz/holyc'>HolyC</Link>
            </div>
          </div>


          <div className="flex flex-col">
            <h2 className='label-text text-center'>Vintage</h2>
            <div className='flex-col-1 w-full grid grid-cols-3 gap-4'>
              <Link className='btn cobol' to='/quiz/cobol'>COBOL</Link>
              <Link className='btn fortran' to='/quiz/fortran'>FORTRAN</Link>
              <Link className='btn pascal' to='/quiz/pascal'>Pascal</Link>
              <Link className='btn basic' to='/quiz/basic'>BASIC</Link>
              <Link className='btn lisp' to='/quiz/common-lisp'>Lisp</Link>
              <Link className='btn assembly' to='/quiz/assembly'>Assembly</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className='label-text text-center'>Esoteric</h2>
            <div className='flex-col-1 w-full grid grid-cols-3 gap-4'>
              <Link className='btn brainfuck' to='/quiz/brainfuck'>Brainfuck</Link>
              <Link className='btn emojicode' to='/quiz/emojicode'>Emojicode</Link>
              <Link className='btn jsfuck' to='/quiz/jsfuck'>JSFuck</Link>
              <Link className='btn omgrofl' to='/quiz/omgrofl'>OMGROFL</Link>
              <Link className='btn shakespeare' to='/quiz/shakespeare'>Shakespeare</Link>
              <Link className='btn false' to='/quiz/false'>FALSE</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
