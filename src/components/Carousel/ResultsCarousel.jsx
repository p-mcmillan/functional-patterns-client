import PropTypes from 'prop-types';

export const ResultsCarousel = ({ photoResultsData }) => {
  // Function to return a randomized index within range [0, max)
  const getRandomIndex = (max) => {
    return Math.floor(Math.random() * max);
  };

  return (
    <div className="lg:flex flex-wrap pb-10 gap-4 justify-around">
      {photoResultsData.map((result) => {
        // Check if there are images in the result
        if (result.images.length > 0) {
          // Get a random index within the images array
          const randomIndex = getRandomIndex(result.images.length);
          const randomImage = result.images[randomIndex];

          return (
            <div key={result.id} className="mt-10 lg:max-w-[20%]">
              {/* Render the random image */}
              <div key={randomImage.id} className="mt-5">
                <img
                  src={randomImage.image}
                  alt={randomImage.id}
                  className="w-full h-auto"
                />
              </div>

              <p className="mt-5 text-xl text-white">{result.treatment}</p>
            </div>
          );
        } else {
          // Handle case where there are no images in the result (if needed)
          return null;
        }
      })}
    </div>
  );
};

ResultsCarousel.propTypes = {
  photoResultsData: PropTypes.array.isRequired,
};
