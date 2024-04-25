import { useState, useEffect } from 'react';
import bulbIcon from '../../assets/icons/light-bulb.svg';
import notepadIcon from '../../assets/icons/notepad.svg';
import { Helmet } from 'react-helmet';
import runmanIcon from '../../assets/icons/run-man.svg';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import ReactGA from 'react-ga4';

const GetStarted = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: '/faq',
      title: 'FAQ',
    });
  });
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Toggle opacity between 0 and 100
      setOpacity((prevOpacity) => (prevOpacity === 0 ? 100 : 0));
    }, 1000); // Adjust the interval time as needed

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    // Track button click event
    ReactGA.event({
      category: 'User Interaction',
      action: 'Clicked Button',
      label: 'Contact Us - FAQ', // Adjust the label as needed
    });
  };

  return (
    <div className="flex flex-col items-center px-[15px] py-[80px] text-center lg:pt-[75px] mt-[20px]">
      <Helmet>
        <meta charset="UTF-8" />
        <title>
          FAQ - NYC Biomechanics - Functional Patterns Training in NYC
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content="Unlock pain-free movement with our unique Functional Patterns Training program in NYC. Experience greater mobility, strength, and flexibility. Join us today!"
        />
        <meta
          name="keywords"
          content="Functional Patterns New York, NYC, Biomechanics, NYC Biomechanics, Brent McMillan, mcmillan, Brent, New York City, Functional Patterns NYC, Manhattan, Brooklyn, Training, Fitness, Movement, Posture, Corrective exercise, Strength training, Mobility, Neuromuscular re-education, Core stability, Alignment, Injury prevention, Movement efficiency, Body awareness, Functional training, Kinetic chain, Balance, Flexibility, Rehabilitation, Sports performance, Range of motion, Dynamic movement, Motor control"
        />
        <meta name="theme-color" content="#303030" />
        <meta name="copyright" content="Copyright © 2024 NYC Biomechanics" />
        <meta name="language" content="English" />
        <meta name="Classification" content="Business" />
        <meta name="url" content="https://www.nycbiomechanics.com/faq" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="FAQ - NYC Biomechanics - Functional Patterns Training in NYC"
        />
        <meta
          property="og:description"
          content="Unlock pain-free movement with our unique Functional Patterns Training program in NYC. Experience greater mobility, strength, and flexibility. Join us today!"
        />
        <meta
          property="og:image"
          content="https://www.nycbiomechanics.com/image-black.png"
        />
        <meta property="og:url" content="https://www.nycbiomechanics.com/faq" />
        <meta property="og:site_name" content="NYC Biomechanics" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.nycbiomechanics.com/faq"
        />
        <meta
          name="twitter:title"
          content="FAQ - NYC Biomechanics - Functional Patterns Training in NYC"
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
          href="/nyc-biomechanics-logo.svg"
          color="#5bbad5"
        />
        <link rel="canonical" href="https://www.nycbiomechanics.com/faq" />
      </Helmet>
      <h2 className="lg:text-[36px] pb-[30px]">
        What You Can Anticipate from Your Initial Assessment*
      </h2>
      <div className=" flex flex-wrap justify-center">
        <div className="flex flex-col items-center lg:p-[30px] pb-[30px] max-w-[395px]">
          <div className="bg-black rounded-full w-[128px] h-[128px]">
            <img
              className=""
              src={bulbIcon}
              alt="Bulb"
              style={{ opacity: `${opacity}%`, transition: 'opacity 0.9s' }}
            />
          </div>
          <div className="my-[20px]">
            <h2 className="mt-[6px] mb-[5px] text-center">
              1. Introduction to the Functional Patterns Training System
            </h2>
          </div>
          <div className="text-center text-[16px] lg:text-[18px]">
            <p className="mb-[16px]">
              Discover why practitioners of Functional Patterns worldwide are
              achieving unmatched results in the fitness industry, particularly
              in:
            </p>
            <p className="mb-[16px]">
              Pain Alleviation
              <br />
              Rehabilitation
              <br />
              Sustainable Training
              <br />
              Enhancing Performance
              <br />
              General Fitness
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center lg:p-[30px] pb-[30px] max-w-[395px] ">
          <div className="bg-black rounded-full w-[128px] h-[128px]">
            <img src={notepadIcon} className="p-[32px]" alt="Note Pad" />
          </div>
          <div className="my-[20px]">
            <h2 className="mt-[6px] mb-[5px] text-center">
              2. Discussion on Your Background, Pain, and Any Injuries
            </h2>
          </div>
          <div className="text-center text-[16px] lg:text-[18px]">
            <p className="mb-[16px]">
              We&apos;ll delve into your background and daily routines to
              identify key factors contributing to your issues or those impeding
              your progress toward your health and fitness objectives.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center lg:p-[30px] pb-[30px] max-w-[395px]">
          <div className="bg-black rounded-full w-[128px] h-[128px] overflow-hidden">
            <div className="w-[250px] h-[250px] flex items-center justify-center">
              <img src={runmanIcon} className="w-full h-full" alt="Run Man" />
            </div>
          </div>
          <div className="my-[20px]">
            <h2 className="mt-[6px] mb-[5px] text-center">
              3. Thorough Analysis of Your Posture and Walking Pattern (Gait
              Cycle)
            </h2>
          </div>
          <div className="text-center text-[16px] lg:text-[18px]">
            <p className="mb-[16px]">
              To assess your movement inefficiencies effectively, we&apos;ll
              capture photographs of your standing posture from both sides and
              utilize slow-motion technology to record your gait cycle.
            </p>
            <p className="mb-[16px]">
              Together, we&apos;ll review these findings and demonstrate how the
              Functional Patterns system addresses these inefficiencies,
              empowering you to enhance your health and overcome pain.
            </p>
          </div>
        </div>
      </div>{' '}
      <div className="pt-[10px]">
        <Link to="/sign-up">
          <Button
            className=""
            style={{
              backgroundColor: 'black',
              color: 'white',
            }}
            onClick={handleClick}
          >
            sign up
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default GetStarted;
