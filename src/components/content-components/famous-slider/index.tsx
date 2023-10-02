"use client";
import { Box, Flex, Heading, Image, Stack } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import famous, { famousTypes, getRandomFlipCardColor } from "./famous";
import "./styles.scss";
import "swiper/css";
import "swiper/css/free-mode";
import FlipCard from "../flip-card";

const FamousSlider = () => {
  return (
    <Stack alignItems="center">
      <Heading className="famous-heading">
        The only link in bio trusted by 40M+
      </Heading>
      <Swiper
        className="famous-types-swiper"
        direction="vertical"
        loop={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        {famousTypes.map((famousType, index) => (
          <SwiperSlide key={index} className="famous-type-label">
            {famousType}
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        className="famous-cards-swiper"
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Autoplay]}
        slidesPerView={5}
        spaceBetween={20}
      >
        {famous.map(({ image, linkleaf_id, borderRadius }) => {
          return (
            <SwiperSlide key={linkleaf_id} className="famous-translate">
              <FlipCard width="350px" height="350px">
                <FlipCard.Front>
                  <Box objectFit="cover" boxSize="100%">
                    <Image
                      src={image}
                      alt={linkleaf_id}
                      borderRadius={borderRadius}
                    />
                  </Box>
                </FlipCard.Front>
                <FlipCard.Back
                  customStyle={{
                    background: getRandomFlipCardColor(),
                    borderRadius,
                  }}
                  handleClick={() => alert(linkleaf_id)}
                >
                  <Flex
                    bg="white"
                    padding="10px 20px"
                    borderRadius={borderRadius}
                  >
                    /{linkleaf_id}
                  </Flex>
                </FlipCard.Back>
              </FlipCard>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Stack>
  );
};

export default FamousSlider;
