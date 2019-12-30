import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import Box from "@material-ui/core/Box";
import banner1 from '@/images/banner1.gif';
import banner2 from '@/images/banner2.png'
const Carousel = () => {
    let reactSwipeEl;
    return (
        <Box >
            <ReactSwipe
                className="carousel"
                swipeOptions={
                    {
                        startSlide: 1,
                        speed: 400,
                        auto: 5000,
                        continuous: true,
                        disableScroll: false,
                        stopPropagation: false,
                    }
                }
                ref={el => (reactSwipeEl = el)}
            >
                <div className="banner1" style={{ height: `380px`,background:`url(${banner1}) center center`}}></div>
                <div className="banner2" style={{ height: `380px`,background:`url(${banner2}) center center`}}></div>
            </ReactSwipe>
        </Box>
    );
};

export default Carousel;