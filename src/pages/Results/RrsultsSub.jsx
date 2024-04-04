import Button from "../../components/Button/Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Import PropTypes
import PropTypes from "prop-types";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

// Function to shuffle an array randomly
function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const ResultsSub = (props) => {
  const [shuffledData, setShuffledData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Shuffle the data when the component mounts
    const shuffledArray = shuffleArray(props.photoResultsData);
    setShuffledData(shuffledArray);
  }, [props.photoResultsData]);

  // Select the first result from shuffledData
  const firstResult = shuffledData.length > 0 ? shuffledData[0] : null;

  const handleClick = () => {
    navigate("/results");
  };

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-t from-black from-5% via-sky-500 via-30% to-emerald-500 to-90% opacity-95">
      <div className="mt-10">
        <h1 className="text-4xl py-5">REAL RESULTS</h1>

        <div className=" md:flex justify-center">
          {firstResult && (
            <div
              key={firstResult.id}
              className="pb-[80px] mt-10 md:max-w-[30%]  "
            >
              {" "}
              <swiper-container
                // ref={swiperElRef}
                slidesPerView={1}
                navigation={true}
                pagination={false}
                loop={true}
                autoplay={{ delay: 6000 }}
                effect="fade"
              >
                {firstResult.images.map((image) => (
                  <swiper-slide key={image.id}>
                    <img src={image.image} alt={image.id} />
                    <p>{image.treatment}</p>
                  </swiper-slide>
                ))}
              </swiper-container>
              {/* <p className="mt-5 font-light text-white">
              {firstResult.treatment}
            </p> */}
            </div>
          )}
        </div>
      </div>
      <div className="py-5">
        {" "}
        <Button
          className="py-7"
          onClick={handleClick}
          style={{
            backgroundColor: "#030201",
            color: "white",
            opacity: 0.75,
          }}
        >
          more results
        </Button>
      </div>
    </div>
  );
};

// Define PropTypes for your Results component
ResultsSub.propTypes = {
  photoResultsData: PropTypes.array.isRequired, // Example: Specify the expected type and make it required
};

export default ResultsSub;
