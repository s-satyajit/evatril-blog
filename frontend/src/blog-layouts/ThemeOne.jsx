import React from "react";

const ThemeOne = ({ blog }) => {
  return (
    <>
      <div className="w-full py-5" dangerouslySetInnerHTML={{ __html: blog.paragraph1 }}></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="w-full py-5" dangerouslySetInnerHTML={{ __html: blog.paragraph2 }}></div>
        <div className="flex items-center">
          <img className="w-full transform transition-transform duration-300 hover:scale-110" src={blog.image1} alt="Blog Image 1" />
        </div>
      </div>
      <div className="w-full py-5" dangerouslySetInnerHTML={{ __html: blog.paragraph3 }}></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex items-center">
          <img className="w-full transform transition-transform duration-300 hover:scale-110" src={blog.image2} alt="Blog Image 2" />
        </div>
        <div className="w-full py-5" dangerouslySetInnerHTML={{ __html: blog.paragraph4 }}></div>
      </div>
      {blog.paragraph5 && <div className="w-full py-5" dangerouslySetInnerHTML={{ __html: blog.paragraph5 }}></div>}
      {blog.videoUrl && (
        <div className="w-full flex justify-center my-5">
          <iframe
            width="100%"
            height="500"
            src={blog.videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </>
  );
};

export default ThemeOne;