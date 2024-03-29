import React from 'react'
import IconCode from '@/components/icons/IconCode'

const LoadingScreen = () => {
    return (
        <div className='container flex justify-center items-center h-full flex-col-4'>
            <div className="flex justify-center w-full max-w-[300px] animate-pulse">
                <IconCode />
            </div>
            <h1 className='h3 uppercase'>Loading</h1>
        </div>
    )
}

export default LoadingScreen