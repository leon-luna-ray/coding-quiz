import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className='w-full'>
            <div className="container text-white flex justify-center items-cetner py-[3rem] text-center font-red-hat">
                <div>© {year} <a href="https://www.rayluna.dev/" target="_blank" className="underline hover:text-yellow-200">rayruna.dev</a></div>
            </div>
        </footer>
    )
}

export default Footer