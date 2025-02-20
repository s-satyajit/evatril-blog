import React from "react";

const ThemeTwo = ({blog}) => {
    return (
        <>
        <div className="justify-center">

        <div className="w-full py-5" dangerouslySetInnerHTML={{__html: blog.paragraph1}}></div>
        <div className="overflow-hidden">
        <img className="w-full transform transition-transform duration-300 hover:scale-110" src={blog.image1} alt="Blog Image 1" />
        </div>
        <div className="w-full py-5" dangerouslySetInnerHTML={{__html: blog.paragraph2}}></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="w-full py-5" dangerouslySetInnerHTML={{__html: blog.paragraph3}}></div>
            <div className="flex items-center overflow-hidden">
                <img className="w-full transform transition-transform overflow-hidden duration-300 hover:scale-110" src={blog.image2} alt="Blog Image 2" />
            </div>
        </div>
        {blog.paragraph4 && <div className="w-full py-5" dangerouslySetInnerHTML={{__html: blog.paragraph4}}></div>}
        </div>
        </>
    )
}

export default ThemeTwo;