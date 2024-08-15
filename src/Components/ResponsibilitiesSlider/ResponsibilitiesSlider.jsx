import React from 'react';
import './ResponsibilitiesSlider.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 767, min: 310 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const ResponsibilitiesSlider = (props) => {

    const{main_head1 ,main_head2 ,main_head3 ,main_head_desc, car_head1 ,car_desc ,car_head2 ,car_desc2 ,car_head3 ,car_desc3 ,car_head4 ,car_desc4 ,car_desc5,car_head5} =props
    return (
        <div className="responsibilities-sec">
            <div className="responsibilities-container">
                <div className="responsibilities-wrapper">
                    <div className="container">
                        <div className="top-content">

                            <h2 className="heading">
                                {main_head1}<br />
                                <span className='text_grad_green'>{main_head2}</span>
                                {main_head3}
                            </h2>
                            <p className="description">{main_head_desc}</p>
                        </div>
                        <div className="row">
                            <Carousel
                                responsive={responsive}
                                autoPlay={false}
                                swipeable={true}
                                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                                draggable={true}
                                autoPlaySpeed={1000}
                                showDots={true}
                                infinite={true}
                                partialVisible={false}
                                dotListClass="custom-dot-list-style"
                            >
                                <div className='col-lg-3 col-md-6 col-sm-12'>
                                    <div className='content'>
                                        <h6>{car_head1}</h6>
                                        <p>{car_desc}</p>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-6 col-sm-12'>
                                    <div className='content'>
                                        <h6>{car_head2}</h6>
                                        <p>{car_desc2}</p>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-6 col-sm-12'>
                                    <div className='content'>
                                        <h6>{car_head3}</h6>
                                        <p>{car_desc3}</p>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-6 col-sm-12'>
                                    <div className='content'>
                                        <h6>{car_head4}</h6>
                                        <p>{car_desc4}</p>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-6 col-sm-12'>
                                    <div className='content'>
                                        <h6>{car_head5}</h6>
                                        <p>{car_desc5}</p>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResponsibilitiesSlider