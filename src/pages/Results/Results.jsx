import { useEffect } from 'react';
import { ResultsCarousel } from '../../components/Carousel/ResultsCarousel';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types'; // Import PropTypes
import VideoResults from './VideoResults';
import ReactGA from 'react-ga4';

const Results = (props) => {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: '/results',
      title: 'Results',
    });
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="lg:pt-40 pt-20 bg-gradient-to-t from-[#1c1917] from-10% via-[#1c1917] via-30%   to-[#0c0a09] to-80%">
      <Helmet>
        <meta charset="UTF-8" />
        <title>
          Results - NYC Biomechanics - Functional Patterns Training in NYC
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content="Unlock pain-free movement with our unique Functional Patterns Training program in NYC. Experience greater mobility, strength, and flexibility. Join us today!"
        />
        <meta
          name="keywords"
          content="Results, Pain Free, Functional Patterns New York, NYC, Biomechanics, NYC Biomechanics, Brent McMillan, mcmillan, Brent, New York City, Functional Patterns NYC, Manhattan, Brooklyn, Training, Fitness, Movement, Posture, Corrective exercise, Strength training, Mobility, Neuromuscular re-education, Core stability, Alignment, Injury prevention, Movement efficiency, Body awareness, Functional training, Kinetic chain, Balance, Flexibility, Rehabilitation, Sports performance, Range of motion, Dynamic movement, Motor control"
        />
        <meta name="theme-color" content="#303030" />
        <meta name="copyright" content="Copyright © 2024 NYC Biomechanics" />
        <meta name="language" content="English" />
        <meta name="Classification" content="Business" />
        <meta name="url" content="https://www.nycbiomechanics.com/results" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Results - NYC Biomechanics - Functional Patterns Training in NYC"
        />
        <meta
          property="og:description"
          content="Unlock pain-free movement with our unique Functional Patterns Training program in NYC. Experience greater mobility, strength, and flexibility. Join us today!"
        />
        <meta
          property="og:image"
          content="https://www.nycbiomechanics.com/image-black.png"
        />
        <meta
          property="og:url"
          content="https://www.nycbiomechanics.com/results"
        />
        <meta property="og:site_name" content="NYC Biomechanics" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.nycbiomechanics.com/results"
        />
        <meta
          name="twitter:title"
          content="Results - NYC Biomechanics - Functional Patterns Training in NYC"
        />
        <meta
          name="twitter:image"
          content="https://www.nycbiomechanics.com/main-logo.jpg"
        />
        <link rel="icon" type="image/svg+xml" href="/logo-white.svg" />

        <link
          rel="apple-touch-icon"
          type="image/svg+xml"
          sizes="76x76"
          href="https://www.nycbiomechanics.com/nyc-biomechanics-logo.svg?width=76"
        />
        <link
          rel="mask-icon"
          href="https://www.nycbiomechanics.com/nyc-biomechanics-logo.svg"
          color="#5bbad5"
        />
        <link rel="canonical" href="https://www.nycbiomechanics.com/results" />
      </Helmet>
      <div className="mt-6">
        <h1 className="text-center uppercase font-bold text-3xl mb-5 lg:text-6xl text-white">
          Photo Results
        </h1>
        {/* mobile */}

        <div className="mx-10 md:px-24 z-0 text-center text-base">
          {props.photoResultsData.map((content, contentIndex) => (
            <div key={contentIndex}>{/* <h2>{content.result}</h2> */}</div>
          ))}
          <ResultsCarousel photoResultsData={props.photoResultsData} />
          <h1 className="text-center uppercase font-bold text-3xl mb-5 lg:text-6xl text-white">
            Video Results
          </h1>

          <VideoResults videoResultsData={props.videoResultsData} />
        </div>
      </div>
    </div>
  );
};

// Define PropTypes for your Results component
Results.propTypes = {
  photoResultsData: PropTypes.array.isRequired, // Example: Specify the expected type and make it required
  videoResultsData: PropTypes.array.isRequired,
};

export default Results;
