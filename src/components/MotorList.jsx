/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function MotorList() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    // prevArrow: <ArrowBackIosIcon />,
    // nextArrow: <ArrowForwardIosIcon />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" flex flex-col bg-red-500">
      <div className="flex flex-col justify-center align-center items-center pb-8 bg-green-500 font-roboto">
        <h1 className="font-bold text-lg">title</h1>
        <h1>subtitle</h1>
      </div>
      <Slider {...settings}>
        <div className="w-full h-80 card bg-green-500">
          <h1>1</h1>
        </div>

        <div className="w-full h-80 card bg-green-500 ">
          <h1>2</h1>
        </div>

        <div className="w-full h-80 card bg-green-500 ">
          <h1>3</h1>
        </div>

        <div className="w-full h-80 card bg-green-500 ">
          <h1>4</h1>
        </div>

        <div className="w-full h-80 card bg-green-500 ">
          <h1>5</h1>
        </div>
      </Slider>
    </div>
  );
}
