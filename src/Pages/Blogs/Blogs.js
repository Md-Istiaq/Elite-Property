import React,{useState,useEffect} from 'react';

const Blogs = () => {
    const [blogs , setBlogs] = useState([])
    useEffect(() =>{
        fetch('https://cryptic-bastion-60889.herokuapp.com/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } ,[])
    return (
        <div>
            <h1 className='text-3xl text-green-400 m-10 '>Real Estate Questions to Expect from Home Sellers & Home Buyers</h1>
            <div>
                {
                    blogs.map(blog => 
                        <div className='border border-green-400 m-10 p-5 rounded-xl'>
                        <h1 className='text-xl font-bold'>{blog.title}</h1>
                        <p>{blog.blog}</p>    
                        </div>
                        )
                }
            </div>
        </div>
    );
};

export default Blogs;