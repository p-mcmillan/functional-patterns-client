//import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import PropTypes from "prop-types";
//import PopUp from "../../components/PopUp/PopUp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

register();

export const ResultsCarousel = ({ photoResultsData }) => {
  const renderResults = (resultType) =>
    photoResultsData
      .filter((result) => result.result === resultType)
      .map((result) => (
        <div key={result.id}>
          <Swiper
            slidesPerView={1}
            navigation={true}
            centeredSlides={true}
            loop={true}
            modules={[Pagination]}
            centeredSlidesBounds={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
            }}
          >
            {result.images.map((image) => (
              <SwiperSlide key={image.id}>
                <img src={image.image} alt={image.id} />
              </SwiperSlide>
            ))}
          </Swiper>

          <p className="mt-5 text-xl text-white">{result.treatment}</p>
        </div>
      ));

  return (
    <div className="lg:flex flex-wrap pb-10 gap-4 justify-around">
      <div className="mt-10 lg:max-w-[20%]">{renderResults("back")}</div>
      <div className="mt-10 lg:max-w-[20%]">{renderResults("neck")}</div>
      <div className="mt-10 lg:max-w-[20%]">{renderResults("toes")}</div>
      <div className="mt-10 lg:max-w-[20%]">{renderResults("sholder")}</div>
      <div className="mt-10 lg:max-w-[20%]">{renderResults("arm")}</div>
    </div>
  );
};

ResultsCarousel.propTypes = {
  photoResultsData: PropTypes.array.isRequired,
};
