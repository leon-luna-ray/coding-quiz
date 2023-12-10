import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className='absolute bottom-0 w-full'>
            <div className="container text-white flex justify-center items cetner py-[2rem] text-center">
                <sapn>© {year} <a href="https://www.rayluna.dev/" target="_blank" class="underline hover:text-yellow-200">rayruna.dev</a></sapn>
            </div>
        </footer>
    )
}

export default Footer