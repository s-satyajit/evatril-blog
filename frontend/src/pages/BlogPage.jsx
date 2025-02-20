import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { useParams } from "react-router-dom";
import ThemeOne from "../blog-layouts/ThemeOne";
import ThemeTwo from "../blog-layouts/ThemeTwo";
import CategoryList from "../components/CategoryList";
import RecentBlogs from "../components/RecentBlogs";
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
      <h1
        className="text-3xl text-center py-3 "
        dangerouslySetInnerHTML={{ __html: blog.title }}
      ></h1>
      <p className="text-center pb-10 text-sm text-[#6C7383]">Posted on {blog.date}</p>
      <div className="grid grid-cols-1 md:grid-cols-10 gap-12">
        <div className="col-span-1 md:col-span-7">
          {blog.theme === 1 && <ThemeOne blog={blog} />}
          {blog.theme === 2 && <ThemeTwo blog={blog} />}
          <div className="flex flex-wrap justify-center md:justify-start space-x-4 py-3 my-10">
            {socialMedia.map(({ name, icon: Icon, color, hoverColor, ShareButton }) => (
              <ShareButton
                key={name}
                url={currentPageUrl}
                className={`flex items-center space-x-2 ${color} text-white rounded-sm ${hoverColor} hover:scale-110 duration-300`}
                style={{backgroundColor: color, color: "white", padding: "0.7rem 2rem"}}
                title={`Share on ${name}`}
              >
                <Icon /> <span>{name}</span>
              </ShareButton>
            ))}
          </div>
        </div>
        <div className="col-span-1 md:col-span-3">
          <RecentBlogs />
          <CategoryList />
        </div>
      </div>
          <RelatedBlogs />
    </div>
  );
};

export default BlogPage;
