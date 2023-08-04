import React,{useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { blog } from '../constants/BlogData';
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import { RiReplyLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
const BlogDetails = () => {
  const { slug } = useParams();
  const blogPost = blog.find((item) => item.title === slug);
console.log(blogPost.image)
let fallback = blogPost.image
  if (!blogPost) {
    // Handle the scenario when the blog post is not found
    return <div>Blog post not found.</div>;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogPost]);

  return (
    <motion.div
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{duration:1.7}}
        exit={{
           
            opacity:0,
        }}
        className='flex flex-col justify-center lg:flex-row px-2 sm:px-5 gap-3 max-w-[100%]'
        >  
      <div className='lg:max-w-[70%]'>
    <div className='mt-[4rem]'>
      <figure className=''>
        <img src={ `../${blogPost.image}` }
         alt=''
         className='w-full object-cover'
         onError={(e) => {
            // Switch to the fallbackImage URL if primary image fails to load
            e.target.onerror = null; // Prevent infinite loop if fallback image also fails
            e.target.src = fallback;
          }}
          />
          </figure>
      
      <div className='flex gap-3 flex-col'>
        <h2 className='text-[1.5rem] font-bold my-5 text-[var(--primary)]'>{blogPost.title}</h2>
        <p>{blogPost.text}{blogPost.text}</p>
        <p>{blogPost.text}{blogPost.text}</p>
        <p>{blogPost.text}{blogPost.text}</p>
      </div>
    </div>
      {/* =============== comment form ============ */}
      <div className=' px-2 sm:px-4'>
        <h2 className='text-[1.5rem]  font-bold my-5 text-[var(--primary)]'>3 Comments</h2>
        <div className='flex gap-3 mt-5'>
        <figure className='w-[5rem]'>
          <img src='../../src/assets/avatar1.png'/>
        </figure>
        <div className="">
                    <h6 className=" fw-bold">David Visa</h6>
                    <p className="section__description mb-0">14 July, 2022</p>
                    <p className="section__description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eos nobis totam eius laborum molestias itaque minima
                      distinctio, quae velit tempore!
                    </p>

                    <span className="replay flex items-center gap-1">
                      <RiReplyLine className='text-yellow-600'/> Reply
                    </span>
                  </div>
                  </div>
                  {/* =============== comment form ============ */}
                  <div className='flex flex-col '>
                    <h2 className='font-bold captalize mt-4 text-[1.2rem] text-[var(--primary)]'>Leave your comment</h2>
                    <form className='flex flex-col gap-3 lg:w-[70%] mt-5'>
                    <input type="text" placeholder="Full name" className='py-2 px-3' />
                      <input type="email" placeholder="Email" className='py-2 px-3' />
                      <textarea rows="5"
                        className="w-100 py-2 px-3"
                        placeholder="Comment...">


                      </textarea>
                      <button className='bg-[var(--primary)] text-white p-3 mt-3'>Post Your Message</button>
                    </form>
                  </div>
      </div>
       </div>
      <div className=' mt-[2rem] lg:mt-[4rem]'>
      <div className=" mb-4">
                <h5 className="text-[1.5rem] font-bold my-1 lg:my-5 text-[var(--primary)]">Recent Posts</h5>
              </div>
              {blog.map((item) => (
                
                <div className=" mb-4" key={item.id}>
                  <div className=" flex items-center gap-3">
                  <img src={item.image}
         alt=''
         className='w-[10rem] object-cover'
         
          />
                    <h6 className=' text-[var(--primary)] hover:underline'>
                      <Link to={`/blog/${item.title}`}>{item.title}</Link>
                    </h6>
                  </div>
                </div>
              ))}
      </div>
    </motion.div>
  );
};

export default BlogDetails;

