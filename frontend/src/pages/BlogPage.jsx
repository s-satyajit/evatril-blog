import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import BlogList from "../components/BlogList";
import Categories from "../components/Categories";
import RelatedBlogs from "../components/RelatedBlogs";
import { useBlogContext } from "../context/BlogProvider";

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
  const { blogs, loading, setCurrentBlog } = useBlogContext();
  const { slug } = useParams();
  const blog = blogs.find((blog) => blog.slug === slug);
  setCurrentBlog(blog);

  if (loading) return <div>Loading...</div>;
  if (!blog) return <div>Blog not found</div>;

  const currentPageUrl = window.location.href;

  return (
    <div className=" mx-auto px-4 md:px-24 py-5 animate-fadeIn">
      <p className="text-center pt-10 text-sm text-gray-700">Venue</p>
      <h1
        className="text-3xl text-center py-7"
        dangerouslySetInnerHTML={{ __html: blog.title }}
      ></h1>
      <p className="text-center pb-10 text-sm text-gray-700">{blog.date}</p>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
        <div className="col-span-1 md:col-span-4">
          <div>
            <div className="w-full py-5" dangerouslySetInnerHTML={{ __html: blog.paragraph1 }}></div>
            <div className="overflow-hidden pb-5">
              <img className="w-full transform transition-transform duration-300 hover:scale-110" src={blog.image1} alt="Blog Image 1" />
            </div>
            <div className="w-full py-5" dangerouslySetInnerHTML={{ __html: blog.paragraph2 }}></div>
            <div className="overflow-hidden pb-5">
              <img className="w-full transform transition-transform duration-300 hover:scale-110" src={blog.image2} alt="Blog Image 2" />
            </div>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start space-x-4 py-3">
            {socialMedia.map(({ name, icon: Icon, color, hoverColor, ShareButton }) => (
              <ShareButton
                key={name}
                url={currentPageUrl}
                className={`px-4 md:px-8 flex items-center space-x-2 ${color} text-white p-2 rounded-sm ${hoverColor} focus:outline-none`}
                aria-label={`Share on ${name}`}
              >
                <Icon /> <span>{name}</span>
              </ShareButton>
            ))}
          </div>
          <p className="pt-2 text-gray-700">#categoryHashtag</p>
          <RelatedBlogs />
        </div>
        <div className="col-span-1 md:col-span-2">
          <BlogList />
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
