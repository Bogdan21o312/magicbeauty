'use client'
import { GelPolishesSliderNewProps } from "./GelPolishesSliderNewProps";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { EntityGelPolishesProductCard } from "../../../../../../entites"

export function GelPolishesSliderNew({ gelPolishes }: GelPolishesSliderNewProps) {

  return (
    <Swiper
      loop={false}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }} modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={10}
      spaceBetween={30}
      parallax={true}
      speed={800}
      breakpoints={{
        1: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        750: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        950: {
          slidesPerView: 4,
          spaceBetween: 15
        },
        1200: {
          slidesPerView: 5,
        },
        1500: {
          slidesPerView: 6,
        },
        1700: {
          slidesPerView: 7,
        },
        1960: {
          slidesPerView: 8,
        },
        2300: {
          slidesPerView: 9,
        },
        2500: {
          slidesPerView: 10,
        },
      }}
    >
      {gelPolishes.map(gelPolish =>
        <SwiperSlide key={gelPolish.gelPolish.imageSrc}>
          <EntityGelPolishesProductCard gelPolish={gelPolish.gelPolish} brand={gelPolish.brand} sizeAndPrice={gelPolish.sizeAndPrice} />
        </SwiperSlide>
      )}
    </Swiper>
  )
}
