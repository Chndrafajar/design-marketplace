import React, { useRef, useState } from 'react';
import { LandingPage } from '../../data';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '../../swiper.css';

import { FreeMode, Pagination } from 'swiper/modules';

const BlogsSlide = () => {
  return (
    <div className="blogsSlide">
      <div className="container">
        <h2>Blogs</h2>
        <Swiper
          breakpoints={{
            576: {
              width: 576,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
            1251: {
              width: 1251,
              slidesPerView: 3,
            },
          }}
          spaceBetween={20}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {LandingPage?.Blogs?.map((b) => (
            <SwiperSlide>
              <div className="column" key={b.id}>
                <div className="items">
                  <img src={b.img} alt="" />
                  <div className="info">
                    <h5>{b.title}</h5>
                    <p>{b.desc.substring(0, 80)}...</p>
                    <span>Read More</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BlogsSlide;
