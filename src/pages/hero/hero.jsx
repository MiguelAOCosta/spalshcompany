import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import GalleryData from "./hero-data";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

const Hero = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{delay: 2000, disableOnInteraction: false}}
    >
      {GalleryData.map((hero, index) => (
        <SwiperSlide key={index}>
          <div className="w-screen h-screen text-center relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-20">
            <img src={hero.img} className="w-full h-full object-cover -z-10" />
            <div className="w-full px-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white uppercase z-10">
              <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl">{hero.title}</h1>
              <h2 className="text-sm font-normal">{hero.subtitle}</h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Hero;