import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import Children from "../../assets/children.png";
import Women from "../../assets/womenn.png";
import Boys from "../../assets/boys.png";

export default function SixSection() {
  return (
    <div className="h-screen ">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-orange-600 lg:text-6xl lg:py-10">
          Learn how to improve through sewing
        </h1>
        <p className="text-black mb-[80px] lg:px-80">
          Welcome to AS Academy s Our Courses page! Discover a wide range of
          knitting classes designed for all skill levels—from beginners taking
          their first stitches to advanced knitters mastering intricate
          patterns. Our expert-led courses blend traditional techniques with
          modern styles, ensuring you create stunning projects while building
          your skills. Start your knitting journey with AS Academy today!
        </p>
      </div>

      <div className="max-w-6xl px-4 mx-auto">
        <Swiper
          slidesPerView={3}
          spaceBetween={40}
    
          loop={true}
          Autoplay={{
            delay: 3000, // Time in milliseconds before switching slides
            disableOnInteraction: false, // Auto slide continues even after user interaction
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              // For small mobile screens
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              // For larger mobile devices
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              // For tablets and desktops
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative h-[550px] flex flex-col items-center justify-center">
              <div className="bg-orange-500">
                <img
                  src={Women}
                  alt="Child 1"
                  className="object-cover -mt-40 h-70 w-70"
                />
              </div>
              <div className="pt-5 pb-10 text-center">
                <h3 className="text-lg font-semibold lg:text-xl">
                  Children’s Dressmaking Course
                </h3>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
          <div className="relative h-[550px] flex flex-col items-center justify-center">
              <div className="bg-orange-500">
                <img
                  src={Children}
                  alt="Child 1"
                  className="object-cover -mt-40 h-70 w-70"
                />
              </div>
              <div className="pt-5 pb-10 text-center">
                <h3 className="text-lg font-semibold lg:text-xl">
                  Children’s Dressmaking Course
                </h3>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
          <div className="relative h-[550px] flex flex-col items-center justify-center">
              <div className="bg-orange-500">
                <img
                  src={Boys}
                  alt="Child 1"
                  className="object-cover -mt-40 h-70 w-70"
                />
              </div>
              <div className="pt-5 pb-10 text-center">
                <h3 className="text-lg font-semibold lg:text-xl">
                  Children’s Dressmaking Course
                </h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
