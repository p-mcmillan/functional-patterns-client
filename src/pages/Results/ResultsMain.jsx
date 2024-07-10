import Button from '../../components/Button/Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/element/css/autoplay';

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const ResultsMain = ({ resultsMainRef, videoHeroData }) => {
  const [shuffledData, setShuffledData] = useState([]);

  useEffect(() => {
    const shuffledArray = shuffleArray(videoHeroData);
    setShuffledData(shuffledArray);
  }, [videoHeroData]);

  const firstHeroVideo = shuffledData.length > 0 ? shuffledData[0].video : null;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about-us');
  };

  return (
    <div
      ref={resultsMainRef}
      className=" snap-center relative flex justify-center items-center bg-black h-screen "
    >
      {/* Video Container Mobile*/}
      <video
        className="block md:hidden w-full h-screen object-cover grayscale"
        src="https://res.cloudinary.com/dprfd8p6y/video/upload/q_61/v1712764738/nyc-biomechanics/videos/Results-Mainccfbddc2_gtigbg.mp4"
        autoPlay
        loop
        muted
        playsInline // Play inline on iOS
        webkit-playsinline="true" // Older iOS support
        style={{ objectFit: 'cover' }}
        poster="https://res.cloudinary.com/dprfd8p6y/video/upload/q_61/v1712764738/nyc-biomechanics/videos/Results-Mainccfbddc2_gtigbg.jpg"
      />

      {/* Video Container Desktop*/}
      <video
        src="https://res.cloudinary.com/dprfd8p6y/video/upload/q_61/v1712764738/nyc-biomechanics/videos/Results-Mainccfbddc2_gtigbg.mp4"
        autoPlay
        loop
        muted
        playsInline // Play inline on iOS
        webkit-playsinline="true" // Older iOS support
        className="hidden md:block md:h-[calc(100vh)] w-full object-cover grayscale"
        poster="https://res.cloudinary.com/dprfd8p6y/video/upload/q_61/v1712764738/nyc-biomechanics/videos/Results-Mainccfbddc2_gtigbg.jpg"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="py-5 text-center text-white uppercase mb-4 px-6">
          reprogram muscles using pain free movement
        </h1>

        {/* <div className="pt-[10px]">
          <Button
            className=""
            onClick={handleClick}
            style={{
              backgroundColor: '#030201',
              color: 'white',
              opacity: 0.75,
            }}
          >
            about us
          </Button>
        </div> */}
      </div>
    </div>
  );
};

ResultsMain.propTypes = {
  videoHeroData: PropTypes.array.isRequired,
  resultsMainRef: PropTypes.object.isRequired,
};

export default ResultsMain;
