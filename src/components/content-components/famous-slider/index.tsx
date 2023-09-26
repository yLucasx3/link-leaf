"use client";
import { Heading, Stack } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { famousTypes } from "./famous";
import "./styles.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/react";

import { Pagination } from "swiper/modules";

const FamousSlider = () => {
  return (
    <Stack alignItems="center">
      <Heading className="famous-heading">
        The only link in bio trusted by 40M+
      </Heading>
      <Swiper
        direction="vertical"
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {famousTypes.map((famousType, index) => (
          <SwiperSlide key={index}>{famousType}</SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
};

export default FamousSlider;
