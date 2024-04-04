import GoogleReviews from "../../components/GoogleReviews/GoogleReviews";
import { Helmet } from "react-helmet";

const Reviews = () => {
  return (
    <>
      <div className="py-5 mt-[100px] min-h-screen">
        <Helmet>
          <meta charset="UTF-8" />
          <title>NYC Biomechanics - Reviews</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="robots" content="index,follow" />
          <meta
            name="description"
            content="Unlock pain-free movement with our unique biomechanics training program in NYC. Experience greater mobility, strength, and flexibility. Join us today!"
          />
          <meta
            name="keywords"
            content="Functional Patterns New York, NYC, Biomechanics, NYC Biomechanics, Brent McMillan, mcmillan, Brent, New York City, Functional Patterns NYC, Manhattan, Brooklyn, Training, Fitness, Movement, Posture, Corrective exercise, Strength training, Mobility, Neuromuscular re-education, Core stability, Alignment, Injury prevention, Movement efficiency, Body awareness, Functional training, Kinetic chain, Balance, Flexibility, Rehabilitation, Sports performance, Range of motion, Dynamic movement, Motor control"
          />
          <meta name="theme-color" content="#303030" />
          <meta name="copyright" content="Copyright © 2024 NYC Biomechanics" />
          <meta name="language" content="English" />
          <meta name="Classification" content="Business" />
          <meta name="url" content="https://nycbiomechanics.com/" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="NYC Biomechanics - Reviews" />
          <meta
            property="og:description"
            content="Unlock pain-free movement with our unique biomechanics training program in NYC. Experience greater mobility, strength, and flexibility. Join us today!"
          />
          <meta property="og:image" content="/image-black.png" />
          <meta property="og:url" content="https://nycbiomechanics.com/" />
          <meta property="og:site_name" content="NYC Biomechanics" />
          <meta property="og:locale" content="en_US" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://nycbiomechanics.com/" />
          <meta name="twitter:title" content="NYC Biomechanics - Reviews" />
          <meta name="twitter:image" content="/main-logo.jpg" />
          <link rel="icon" type="image/svg+xml" href="/logo-white.svg" />

          <link
            rel="apple-touch-icon"
            type="image/svg+xml"
            sizes="76x76"
            href="/nyc-biomechanics-logo.svg?width=76"
          />
          <link
            rel="mask-icon"
            href="/nyc-biomechanics-logo.svg"
            color="#5bbad5"
          />
          <link rel="canonical" href="https://nycbiomechanics.com/" />
        </Helmet>
        <GoogleReviews />
      </div>
    </>
  );
};

export default Reviews;
