import { useState, useEffect } from 'react';
import bulbIcon from '../../assets/icons/light-bulb.svg';
import notepadIcon from '../../assets/icons/notepad.svg';
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
              backgroundColor: 'blue',
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
