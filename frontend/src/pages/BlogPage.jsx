import React from "react";
import { useParams } from "react-router-dom";
import { useBlogContext } from "../context/BlogProvider";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import BlogList from "../components/BlogList";
import Categories from "../components/Categories";
import RelatedBlogs from "../components/RelatedBlogs";

const socialMedia = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    color: "bg-blue-600",
    hoverColor: "hover:bg-blue-700",
    ShareButton: FacebookShareButton,
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    color: "bg-blue-400",
    hoverColor: "hover:bg-blue-500",
    ShareButton: TwitterShareButton,
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    color: "bg-blue-800",
    hoverColor: "hover:bg-blue-800",
    ShareButton: LinkedinShareButton,
  },
  {
    name: "Whatsapp",
    icon: FaWhatsapp,
    color: "bg-green-500",
    hoverColor: "hover:bg-green-600",
    ShareButton: WhatsappShareButton,
  },
];

const BlogPage = () => {
  const { blogs, loading, currentBlog, setCurrentBlog } = useBlogContext();
  const { slug } = useParams();
  const blog = blogs.find((blog) => blog.slug === slug);
  setCurrentBlog(blog);

  if (loading) return <div>Loading...</div>;

  if (!blog) return <div>Blog not found</div>;

  const currentPageUrl = window.location.href;

  return (
    <div className="mx-24">
      <p className="text-center pt-10 text-sm text-gray-700">Venue</p>
      <h1 className="text-3xl text-center py-7">{blog.title}</h1>
      <p className="text-center pb-10 text-sm text-gray-700">{blog.date}</p>
      <div className="grid grid-cols-6">
        <div className="col-span-4">
          <div>
            <div className="w-200 py-5">{blog.paragraph1}</div>
            <img className="w-200 pb-5" src={blog.image1} alt="Blog Image 1" />
            <div className="w-200 py-5">{blog.paragraph2}</div>
            <img className="w-200 pb-5" src={blog.image2} alt="Blog Image 2" />
          </div>
          <div className="flex space-x-20 py-3">
            {socialMedia.map(
              ({ name, icon: Icon, color, hoverColor, ShareButton }) => (
                <ShareButton
                  key={name}
                  url={currentPageUrl}
                  className={`px-8 flex items-center space-x-2 ${color} text-white p-2 rounded-sm ${hoverColor} focus:outline-none`}
                  aria-label={`Share on ${
                    name.charAt(0).toUpperCase() + name.slice(1)
                  }`}
                >
                  <Icon /> <span>{name}</span>
                </ShareButton>
              )
            )}
          </div>
          <p className="pt-2 text-gray-700">#categoryHashtag</p>
          <RelatedBlogs />
        </div>
        <div className="col-span-2">
          <BlogList />
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
