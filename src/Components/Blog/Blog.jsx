import React, { useEffect,useState } from 'react';
import './Blog.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import blogImg1 from '../../Assets/blogImg1.png';
import blogImg2 from '../../Assets/blogImg2.png';
import blogImg3 from '../../Assets/blogImg3.png';
import axios from 'axios';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 310 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
};

const Blog = () => {
    const [data,setData]=useState([])
    const extractTitle = (content) => {
        if (!content) return ''; 
        const words = content.split(' ');
        const title = words.slice(0, 5).join(' ');
        return words.length > 5 ? `${title}....` : title;
    };
    const extractContent = (content) => {
        if (!content) return ''; 
        const words = content.split(' ');
        const Content = words.slice(0, 6).join(' ');
        return words.length > 6 ? `${Content}.....` : Content;
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://empowercare.me/wp-json/empower/staffing/blogs');
                console.log(response.data)
                setData(response.data);
                
            } catch (err) {
                
                console.log(err)
            } 
        };

        
        fetchData();
    }, [])
    return (
        <div className="blog-sec">
            <div className="blog-container">
                <div className="blog-wrapper">
                    <div className="container">
                        <div className="top-content">
                            <span className="meta">Blogs</span>
                            <h2 className="heading">
                                Healthcare <br />
                                <span> News </span>
                                & Blog Feed
                            </h2>
                        </div>
                        <div className="row">
                            <Carousel
                                responsive={responsive}
                                autoPlay={false}
                                swipeable={true}
                                draggable={true}
                                autoPlaySpeed={1000}
                                showDots={true}
                                infinite={true}
                                partialVisible={false}
                                dotListClass="custom-dot-list-style"
                            >
                                {data?.map((blog,index)=>{return(<>
                                    <div className="col-md-12" key={index}>
                                    <div className="blog-box">
                                        <div className="blog-img">
                                        <a href={blog.permalink} target='_blank'> <img src={blog.thumbnail} alt="blogImg1" /></a>
                                        </div>
                                        <div className="blog-content active">
                                            <a href={blog.permalink} target='_blank' className="description"><b>{extractTitle(blog.title)}</b> </a>
                                            <p className='date-time'> {extractContent(blog.Content)}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                </>)})}
                                
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog