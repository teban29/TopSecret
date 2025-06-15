import { div } from 'framer-motion/client'
import React from 'react'

export const ImageCard = ({ image, description }) => {
    return (
        <div className='group w-80 rounded-xl overflow-hidden shadow-xl bg-gray-950 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]'>
            <img 
                src={image} 
                alt="Imagen" 
                className='w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110' 
            />
            <div className='bg-slate-950 p-5 text-center border-t border-gray-800'>
                <p className='text-white text-base font-medium tracking-wide'>{description}</p>
            </div>
        </div>
    )
}