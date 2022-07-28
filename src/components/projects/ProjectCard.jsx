import React from 'react'

export const ProjectCard = (props) => {
    return (
        <a href={props.link} rel="noreferrer" target="_blank" className="block relative mt-6 w-[30%] h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card">
            <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-mainGray transition-all duration-100 delay-200 z-20 hover:opacity-0">
                {props.nameProject}
            </div>
            <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-black transition-all z-10 card-back p-4">
            {props.description}
            </div>
        </a>
    )
}
