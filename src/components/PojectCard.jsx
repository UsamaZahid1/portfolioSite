import React from 'react'

const ProjectCard = ({ image, title, subtitle }) => {
    return (
        <div className="relative rounded-lg overflow-hidden group">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-115"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/70 p-4">
                <h3 className="text-white text-[18px] font-semibold">{title}</h3>
                <p className="text-gray-300 text-[14px]">{subtitle}</p>
            </div>
        </div>
    )
}

export default ProjectCard
