import { useEffect } from 'react';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga4';

const AboutUs = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: '/about-us',
      title: 'About',
    });
  });
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/sign-up');
  };

  return (
    <div className="flex flex-col items-center mx-[15px] py-[80px] text-center h-full ">
      <Helmet>
        <meta charset="UTF-8" />
        <title>
          About Us - NYC Biomechanics - Functional Patterns Training in NYC
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content="Unlock pain-free movement with our unique Functional Patterns Training program in NYC. Experience greater mobility, strength, and flexibility. Join us today!"
        />
        <meta
          name="keywords"
          content="Functional Patterns New York, Functional Patterns NY, NYC Biomechanics, NY Biomechanics,Biomechanics NY, Brent McMillan, biomechanics training NYC, functional patterns NYC, Training, Manhattan biomechanics, Functional Movement, Brooklyn biomechanics, biomechanics center NYC, fitness training NYC, movement training NYC, posture correction NYC, strength training NYC, mobility training NYC, neuromuscular re-education NYC, core stability training NYC, injury prevention NYC, movement efficiency NYC, body awareness NYC, functional training NYC, kinetic chain training NYC, balance training NYC, flexibility training NYC, rehabilitation NYC, sports performance NYC, range of motion NYC, dynamic movement training NYC, motor control training NYC"
        />
        <meta name="theme-color" content="#303030" />
        <meta name="copyright" content="Copyright © 2024 NYC Biomechanics" />
        <meta name="language" content="English" />
        <meta name="Classification" content="Business" />
        <meta name="url" content="https://www.nycbiomechanics.com/about-us" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Us " />
        <meta
          property="og:description"
          content="Unlock pain-free movement with our unique biomechanics training program in NYC. Experience greater mobility, strength, and flexibility. Join us today!"
        />
        <meta
          property="og:image"
          content="https://www.nycbiomechanics.com/main-logo.jpg"
        />
        <meta
          property="og:url"
          content="https://www.nycbiomechanics.com/about-us"
        />
        <meta
          property="og:site_name"
          content="About Us - NYC Biomechanics - Functional Patterns Training in NYC"
        />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.nycbiomechanics.com/about-us"
        />
        <meta
          name="twitter:title"
          content="About Us - NYC Biomechanics - Functional Patterns Training in NYC"
        />
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
        <link rel="canonical" href="https://www.nycbiomechanics.com/about-us" />
      </Helmet>

      <div>
        {' '}
        <h2 className="py-5 text-center text-black uppercase sm:mb-4 px-6 lg:text-[36px] md:block hidden">
          “What is Functional Patterns?”
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center lg:mx-[36px]">
        <div className="lg:w-1/2 lg:mr-4">
          <img
            className=""
            src="https://res.cloudinary.com/dprfd8p6y/image/upload/f_auto,q_auto/v1/nyc-biomechanics/images/cigo34ft47h88zxxghrh"
            alt="brent-mcmillan"
          />
        </div>

        <div className="lg:w-1/2 lg:ml-4">
          <h2 className="py-5 text-center text-black uppercase sm:mb-4 px-6 lg:text-[36px] lg:hidden">
            “What is Functional Patterns?”
          </h2>
          <div className=" mb-[16px] text-black pb-[24px] lg:text-[18px] text-[16px] ">
            <p className="mb-[15px] text-left">
              Unlike any other point in human history, the main health crisis we
              face is the imbalance within our society and our disconnection
              from nature. Moving away from natural practices and shifting
              towards a more modern way of living has greatly affected our
              ability to move correctly and stay out of pain.
            </p>
            <p className="mb-[15px] text-left">
              So, how can we achieve balance in a world filled with imbalance?
              The answer is straightforward: our health depends on how well we
              adapt to the natural environment. The more harmoniously we coexist
              with nature, the healthier and more resilient we become. For
              humans, this means bringing us back to the beneficial aspects of
              our evolutionary blueprint that made us healthy to begin with.
            </p>
            <p className="mb-[15px] text-left"></p>
            <p className="mb-[15px] text-left">
              <span className="font-bold">THE BLUEPRINT</span>
              <br />
              There’s an evolutionary blueprint to how all organisms work and
              Functional Patterns has been cracking the code in human movement
              for nearly 15 years. Resulting from tens of thousands of hours in
              testing, we have pioneered the FP methodology, syncing the physics
              of our natural environment to our health better than any other
              system out there.
            </p>
            <p className="mb-[15px] text-left">
              Our conclusion has been to train humans according to their
              biological movement characteristics: Standing, Walking, Running,
              and Throwing — The “FP Big 4”. By optimizing these four human
              functions, achieving better health is not a gamble, but an
              inevitability. This is what it means to train Functional Patterns!
            </p>
            <p className="mb-[15px] text-left">
              &quot;We take the guesswork out of taking care of your body&quot;
            </p>

            <div className="lg:flex">
              <Button
                className="lg:self-start"
                onClick={handleClick}
                style={{
                  backgroundColor: 'black',
                  color: 'white',
                }}
              >
                get started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
