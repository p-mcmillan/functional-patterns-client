import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 2));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const Info = forwardRef(({ infoVideoData }, ref) => {
  const [shuffledData, setShuffledData] = useState([]);

  useEffect(() => {
    const shuffledArray = shuffleArray(infoVideoData);
    setShuffledData(shuffledArray);
  }, [infoVideoData]);

  const firstHeroVideo = shuffledData.length > 0 ? shuffledData[0].video : null;

  return (
    <div
      id="about"
      className=" snap-center bg-black lg:h-screen relative flex justify-center items-center"
      ref={ref}
    >
      {/* Video Container */}
      <video
        src="https://res.cloudinary.com/dprfd8p6y/video/upload/q_56/v1712764736/nyc-biomechanics/videos/Info9616dbba_hxoqzb.mp4"
        autoPlay
        loop
        muted
        playsInline // Play inline on iOS
        webkit-playsinline="true" // Older iOS support
        className="w-full h-[50%] lg:h-[calc(100vh)] object-cover grayscale"
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h2 className="text-[28px]uppercase pt-[80px] lg:text-[42px]">
          Unlock peak performance and transform your body at NYC Biomechanics
        </h2>
        <div className="my-5 flex-grow flex-shrink justify-end"></div>

        {/* Button */}

        <div className="pb-[40px]">
          <p className="text-[16px] mx-4 lg:text-[24px] text-left max-w-[700px]">
            Our certified trainers specialize in human biomechanics using the
            renowned Functional Patterns method. Elevate your pain free fitness
            experience in the heart of New York City with personalized training
            programs tailored to optimize your biomechanical efficiency. Join us
            for a revolutionary approach to fitness and well-being.
          </p>{' '}
          <div className="pt-[10px]">
            <Link to="/faq">
              <Button
                className=""
                style={{
                  backgroundColor: '#030201',
                  color: 'white',
                  opacity: 0.75,
                }}
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

Info.displayName = 'Info';

Info.propTypes = {
  infoVideoData: PropTypes.array.isRequired,
};

export default Info;
