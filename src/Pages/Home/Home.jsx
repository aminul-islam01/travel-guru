import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Home.css";

// import required modules
import { Pagination, Navigation } from "swiper";

import img1 from '../../assets/Sajek.png'
import img2 from '../../assets/Sreemongol.png'
import img3 from '../../assets/sundorbon.png'
import bgc from '../../assets/Rectangle1.png'

const Home = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    const [url, setUrl] = useState(bgc);
    const [text, setText] = useState();

    const handleBackgroundImg = (imgUrl) => {
        setUrl(imgUrl);
        // setText(text)
    }
   
    return (
        <div>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide style={{ backgroundImage: `url(${img1})` }} onClick={() => handleBackgroundImg(img1)}>Slide 1</SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(${img2})` }} onClick={() => handleBackgroundImg(img2)}>Slide 2</SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(${img3})` }} onClick={() => handleBackgroundImg(img3)}>Slide 3</SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(${img2})` }} onClick={() => handleBackgroundImg(img2)}>Slide 4</SwiperSlide>
                <SwiperSlide><img src={img1}/><h2 className="a">sajek</h2></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Home;