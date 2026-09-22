import { motion } from "motion/react";

import {
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";

import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import useSiteData from "../../hooks/useSiteData";

import SectionTitle from "../common/SectionTitle";
import ReviewCard from "../review/ReviewCard";

const ReviewsSection = () => {
  const { siteData } = useSiteData();

  const testimonials = siteData?.testimonials;

  if (!testimonials?.items?.length) {
    return null;
  }

  return (
    <section
      id="reviews"
      className="
        relative
        overflow-hidden
        bg-white
        px-5
        py-20

        sm:px-8
        sm:py-24

        lg:px-10
        lg:py-32
      "
    >
      {/* background effects */}

      <div
        className="
          pointer-events-none
          absolute
          -left-44
          top-20
          h-[400px]
          w-[400px]
          rounded-full
          bg-blue-100/70
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-44
          bottom-0
          h-[430px]
          w-[430px]
          rounded-full
          bg-violet-100/60
          blur-[150px]
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}

        <div
          className="
            flex
            flex-col
            gap-8

            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <SectionTitle
            eyebrow={testimonials.eyebrow}
            title={testimonials.heading}
            highlight={testimonials.highlight}
            description={testimonials.description}
            align="left"
          />

          {/* Navigation */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="flex items-center gap-2"
          >
            <button
              type="button"
              aria-label="Previous testimonial"
              className="
                testimonial-prev
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                text-slate-700
                shadow-sm
                transition
                duration-300

                hover:-translate-x-1
                hover:border-blue-200
                hover:bg-blue-600
                hover:text-white
                hover:shadow-lg
              "
            >
              <FiArrowLeft />
            </button>

            <button
              type="button"
              aria-label="Next testimonial"
              className="
                testimonial-next
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-slate-950
                text-white
                shadow-lg
                transition
                duration-300

                hover:translate-x-1
                hover:bg-blue-600
                hover:shadow-xl
              "
            >
              <FiArrowRight />
            </button>
          </motion.div>
        </div>

        {/* Carousel */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-12

            [&_.swiper]:overflow-visible
            [&_.swiper-slide]:h-auto

            [&_.swiper-pagination]:!relative
            [&_.swiper-pagination]:!bottom-auto
            [&_.swiper-pagination]:mt-10

            [&_.swiper-pagination-bullet]:!h-2
            [&_.swiper-pagination-bullet]:!w-2
            [&_.swiper-pagination-bullet]:!bg-slate-300
            [&_.swiper-pagination-bullet]:!opacity-100
            [&_.swiper-pagination-bullet]:transition-all
            [&_.swiper-pagination-bullet]:duration-300

            [&_.swiper-pagination-bullet-active]:!w-7
            [&_.swiper-pagination-bullet-active]:!rounded-full
            [&_.swiper-pagination-bullet-active]:!bg-blue-600
          "
        >
          <Swiper
            modules={[
              Autoplay,
              Navigation,
              Pagination,
              A11y,
            ]}
            spaceBetween={18}
            slidesPerView={1}
            loop={testimonials.items.length > 3}
            speed={750}
            grabCursor
            watchOverflow
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              previousEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.15,
                spaceBetween: 20,
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 22,
              },

              1024: {
                slidesPerView: 2.4,
                spaceBetween: 24,
              },

              1280: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            {testimonials.items.map((review) => (
              <SwiperSlide key={review.id}>
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
    </section>
  );
};

export default ReviewsSection;