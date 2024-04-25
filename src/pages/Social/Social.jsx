import { ElfsightWidget } from 'react-elfsight-widget';
import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga4';

const widgetIg = import.meta.env.VITE_APP_widgetId_IG;
const Social = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: '/socials',
      title: 'Social',
    });
  });

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="pt-[75px] min-h-screen bg-gradient-to-t from-[#1c1917] from-10% via-[#1c1917] via-30%  to-[#000000] to-80%">
      <Helmet>
        <meta charset="UTF-8" />
        <title>
          Socials - NYC Biomechanics - Functional Patterns Training in NYC
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
        <meta name="url" content="https://www.nycbiomechanics.com/social" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Socials - NYC Biomechanics - Functional Patterns Training in NYC"
        />
        <meta
          property="og:description"
          content="Unlock pain-free movement with our unique biomechanics training program in NYC. Experience greater mobility, strength, and flexibility. Join us today!"
        />
        <meta property="og:image" content="/image-black.png" />
        <meta
          property="og:url"
          content="https://www.nycbiomechanics.com/social"
        />
        <meta property="og:site_name" content="NYC Biomechanics" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.nycbiomechanics.com/social"
        />
        <meta
          name="twitter:title"
          content="Socials - NYC Biomechanics - Functional Patterns Training in NYC"
        />
        <meta
          name="twitter:image"
          content="https://www.nycbiomechanics.com/main-logo.jpg"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="https://www.nycbiomechanics.com/logo-white.svg"
        />

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
        <link rel="canonical" href="https://www.nycbiomechanics.com/social" />
      </Helmet>
      <div className="">
        {' '}
        <h1 className="uppercase items-center text-center text-white mb-5 lg:text-[36px]">
          socials
        </h1>
        <div className="max-w-lg mx-auto">
          <ElfsightWidget widgetId={widgetIg} lazy modern />
        </div>
      </div>
    </div>
  );
};

export default Social;
