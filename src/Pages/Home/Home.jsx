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
import { Button, Col, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const travels = useLoaderData()

    const [swiperRef, setSwiperRef] = useState(null);

    // const [url, setUrl] = useState(bgc);
    const [name, setName] = useState("Cox's Bazar");
    const [description, setDescription] = useState();

    const handleBackgroundImg = (travel) => {
        // setUrl(imgUrl);
        setName(travel.name)
    }
    console.log(swiperRef)
    return (
        <Row>
            <Col xs={12} md={5} style={{ zIndex: '4' }} className="p-5">
                <h1 className="text-light display-5 fw-bold">{name}</h1>
                <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nihil fuga unde vitae qui beatae tenetur, facere amet repellat quis dolores obcaecati iusto ea laudantium praesentium. Ea dolor debitis iure?</p>
                <Button variant="warning">Booking</Button>
            </Col>
            <Col xs={12} md={7}>
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

                    {
                        travels.map(travel => <SwiperSlide
                            onClick={() => handleBackgroundImg(travel)}
                            key={travel.id}>
                            <img src={travel.image_url} />
                            <h2 className="a">{travel.name}</h2>
                        </SwiperSlide>)
                    }
                </Swiper>
            </Col>
        </Row>
    );
};

export default Home;