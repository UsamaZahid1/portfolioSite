import React from 'react'

const ProjectCard = ({ image, title, subtitle,onClick }) => {
    return (
        <div onClick={onClick}  className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-all duration-500">
            
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/70 backdrop-blur-sm p-4">
                <h3 className="text-white text-[18px] font-semibold">{title}</h3>
                <p className="text-gray-300 text-[14px]">{subtitle}</p>
            </div>
        </div>
    )
}

export default ProjectCard
