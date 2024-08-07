import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TypeAnimation } from 'react-type-animation';
import Button from '../../components/Button/Button';

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const Hero = ({ scrollToInfo, videoHeroData, infoRef }) => {
  const [shuffledData, setShuffledData] = useState([]);

  useEffect(() => {
    const shuffledArray = shuffleArray(videoHeroData);
    setShuffledData(shuffledArray);
  }, [videoHeroData]);

  const firstHeroVideo = shuffledData.length > 0 ? shuffledData[0].video : null;

  return (
    <div className=" snap-center relative bg-black h-screen grayscale flex flex-col justify-center items-center">
      {/* Video Container Mobile*/}
      <video
        className="block md:hidden w-full h-full object-cover"
        src="https://res.cloudinary.com/dprfd8p6y/video/upload/q_66/v1712764738/nyc-biomechanics/videos/Hero4482bbef_zeuaoi.mp4"
        autoPlay
        loop
        muted
        playsInline // Play inline on iOS
        webkit-playsinline="true" // Older iOS support
        style={{ objectFit: 'cover' }}
        poster="https://res.cloudinary.com/dprfd8p6y/video/upload/v1712764738/nyc-biomechanics/videos/Hero4482bbef_zeuaoi.jpg" // Add this line with the path to your thumbnail image
      />

      {/* Video Container Desktop*/}
      <video
        src="https://res.cloudinary.com/dprfd8p6y/video/upload/f_auto:video,q_auto/v1/nyc-biomechanics/videos/hero-03_faaanr"
        autoPlay
        loop
        muted
        playsInline // Play inline on iOS
        webkit-playsinline="true" // Older iOS support
        className="hidden md:block lg:h-[calc(100vh)] w-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-white uppercase text-[16px] mb-4 lg:text-4xl px-6">
          <TypeAnimation
            sequence={[
              'say goodbye to chronic pain with NYC Biomechanics: your path to lasting relief',
              1000,
              'eliminate chronic pain and move better',
              1000,
              'take the guesswork out of taking care of your body',
              1000,
            ]}
            repeat={Infinity}
          />
        </h1>
        {/* <Button
          onClick={scrollToInfo}
          style={{
            backgroundColor: '#030201',
            color: 'white',
            opacity: 0.75,
            position: 'absolute',
            bottom: '25%',
          }}
        >
          what is nyc biomechanics
        </Button> */}
      </div>
    </div>
  );
};

Hero.propTypes = {
  scrollToInfo: PropTypes.func.isRequired,
  videoHeroData: PropTypes.array.isRequired,
  infoRef: PropTypes.object.isRequired,
};

export default Hero;
