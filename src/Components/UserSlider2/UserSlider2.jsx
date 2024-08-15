import React from 'react';
import { Link } from 'react-router-dom';
import './UserSlider2.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import reviewImg1 from '../../Assets/reviewImg1.jpg';
import reviewImg2 from '../../Assets/reviewImg2.jpg';
import reviewImg3 from '../../Assets/reviewImg3.jpg';
import reviewImg4 from '../../Assets/reviewImg4.jpg';
import reviewImg5 from '../../Assets/reviewImg5.jpg';
import reviewImg6 from '../../Assets/reviewImg6.jpg';
import reviewImg7 from '../../Assets/reviewImg7.jpg';
import reviewImg8 from '../../Assets/reviewImg8.jpg';
import reviewImg9 from '../../Assets/reviewImg9.jpg';
import rightarrow from '../../Assets/right-arrow.svg';
import downarrow from '../../Assets/down-link-arrow.svg';
import StarIcon from '@mui/icons-material/Star';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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

const userData = [
    {
        // userImg: reviewImg1,
        userName: "Pamela C",
        userMeta: "Industry Standard",
        userMessage: "Very nice staff who are willing to help you with everything. Lacy is really cool keeping me updated with information.",
        btnText: "READ MORE",
        btnarrow: rightarrow
    },
    {
        // userImg: reviewImg2,
        userName: "Vanessa B",
        userMeta: "Industry Standard",
        userMessage: "My experience with Lacy at msg staffing was amazing she helped me so much through my entire application",
        btnText: "READ MORE",
        btnarrow: rightarrow
    },
    {
        // userImg: reviewImg3,
        userName: "Jamie C",
        userMeta: "Industry Standard",
        userMessage: "As a local traveler, I have had no problem securing good contracts in a timely manner.  ",
        btnText: "READ MORE",
        btnarrow: rightarrow
    },
    {
        // userImg: reviewImg4,
        userName: "UMass CT",
        userMeta: "Industry Standard",
        userMessage: "The MSG Staffing nurses that have worked in the Emergency Department have been excellent.",
        btnText: "READ MORE",
        btnarrow: rightarrow
    },
    {
        // userImg: reviewImg5,
        userName: "Victoria G",
        userMeta: "Industry Standard",
        userMessage: "MSG is a great place to work. The staff are really nice and helpful ",
        btnText: "READ MORE",
        btnarrow: rightarrow
    },
    {
        // userImg: reviewImg6,
        userName: "Bernice B",
        userMeta: "Industry Standard",
        userMessage: "It has been a great opportunity to work with msg I have got a lot of experience! Thanks to MSG ",
        btnText: "READ MORE",
        btnarrow: rightarrow
    },

    {
        // userImg: reviewImg7,
        userName: "Theodore R",
        userMeta: "Industry Standard",
        userMessage: "MSG has provided staff who are committed and qualified resulting in positive program outcomes ",
        btnText: "READ MORE",
        btnarrow: rightarrow
    },

    {
        // userImg: reviewImg8,
        userName: "Keiran K",
        userMeta: "Industry Standard",
        userMessage: "The staff working for MSG made it easy and helpful to start working. Great people working for this company.",
        btnText: "READ MORE",
        btnarrow: rightarrow
    },

    {
        // userImg: reviewImg9,
        userName: "Annie M",
        userMeta: "Industry Standard",
        userMessage: "MSG Staffing have been a great company to work for there is plenty of work available,",
        btnText: "READ MORE",
        btnarrow: rightarrow
    },
]

const Userslider2 = () => {
    return (
        <div className="user-slider-sec2">
            <div className="user-slider-container">
                <div className="user-slider-wrapper">
                    <div className="container">
                        <div className="users-item row">
                            <Carousel
                                responsive={responsive}
                                autoPlay={true}
                                swipeable={true}
                                draggable={true}
                                autoPlaySpeed={3000}
                                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                                showDots={false}
                                infinite={true}
                                partialVisible={false}
                                dotListClass="custom-dot-list-style"
                            >
                                {
                                    userData.map((item, id) => (
                                        <>
                                            <div className="col-md-12" key={id}>
                                                <div className="user-box">
                                                    {/* <div className="user-logo">
                                                        <img src={item.userImg} alt="blogImg1" />
                                                    </div> */}
                                                    <h4 className="heading">{item.userName}</h4>
                                                    <p className="description">{item.userMessage}</p>
                                                    <div className="rating">
                                                        <div className="rating-star">
                                                            <StarIcon />
                                                        </div>
                                                        <div className="rating-star">
                                                            <StarIcon />
                                                        </div>
                                                        <div className="rating-star">
                                                            <StarIcon />
                                                        </div>
                                                        <div className="rating-star">
                                                            <StarIcon />
                                                        </div>
                                                        <div className="rating-star">
                                                            <StarIcon />
                                                        </div>
                                                    </div>
                                                    <Link className="learn-more" to="/">
                                                        <span>{item.btnText}</span>
                                                        <img src={item.btnarrow} alt="rightarrow" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </>
                                    ))
                                }
                            </Carousel>
                        </div>
                        <div className="bottom-btn">
                            <Link target='_blank' to="/signup" className="apply-btn">
                                <span>Quick Apply</span>
                                <img src={downarrow} alt="downarrow" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userslider2