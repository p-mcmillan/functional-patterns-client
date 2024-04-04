import { useRef } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const VideoResults = (props) => {
  const videoRef = useRef(null);

  // Function to shuffle an array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div className="lg:flex flex-wrap pb-10 gap-4 justify-around">
      {props.videoResultsData.map((result) => {
        // Shuffle the array of videos
        const shuffledVideos = shuffleArray(result.videos);
        // Get the first video from the shuffled array
        const firstVideo = shuffledVideos[0];
        return (
          <div key={result.id} className="lg:w-1/5 flex justify-center">
            {/* Adjust the width for lg viewport according to your preference */}
            <div className="z-0 text-center text-base pt-5">
              <video
                ref={videoRef}
                width="100%"
                height="100%"
                controls
                loop={false}
              >
                <source src={firstVideo.video} type="video/mp4" />
              </video>
              <p className="mt-6 text-xl text-white">{result.result}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

VideoResults.propTypes = {
  videoResultsData: PropTypes.array.isRequired,
};

export default VideoResults;
