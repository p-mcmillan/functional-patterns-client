import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';
import Button from '../../components/Button/Button';

const Pricing = ({ pricingData }) => {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: '/pricing',
      title: 'Pricing',
    });
  });

  const handleClick = () => {
    // Track button click event
    ReactGA.event({
      category: 'User Interaction',
      action: 'Clicked Button',
      label: 'Book Now Button', // Adjust the label as needed
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-t from-[#1c1917] from-10% via-[#1c1917] via-30% to-[#000000] to-80% lg:pt-[75px] pt-[20px]">
      <Helmet>
        <meta charset="UTF-8" />
        <title>Pricing - NYC Biomechanics</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content="Unlock pain-free movement with our unique Functional Patterns Training program in NYC. Experience greater mobility, strength, and flexibility. Join us today!"
        />
        <meta
          name="keywords"
          content="Functional Patterns New York, Pricing, Cost, NYC, Biomechanics, NYC Biomechanics, Brent McMillan, mcmillan, Brent, New York City, Functional Patterns NYC, Manhattan, Brooklyn, Training, Fitness, Movement, Posture, Corrective exercise, Strength training, Mobility, Neuromuscular re-education, Core stability, Alignment, Injury prevention, Movement efficiency, Body awareness, Functional training, Kinetic chain, Balance, Flexibility, Rehabilitation, Sports performance, Range of motion, Dynamic movement, Motor control"
        />
        <meta name="theme-color" content="#303030" />
        <meta name="copyright" content="Copyright © 2024 NYC Biomechanics" />
        <meta name="language" content="English" />
        <meta name="Classification" content="Business" />
        <meta name="url" content="https://www.nycbiomechanics.com/pricing" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Pricing - NYC Biomechanics - Functional Patterns Training in NYC"
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
          content="https://www.nycbiomechanics.com/pricing"
        />
        <meta property="og:site_name" content="NYC Biomechanics" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.nycbiomechanics.com/pricing"
        />
        <meta
          name="twitter:title"
          content="Pricing - NYC Biomechanics - Functional Patterns Training in NYC"
        />
        <meta name="twitter:image" content="/main-logo.jpg" />
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
        <link rel="canonical" href="https://www.nycbiomechanics.com/pricing" />
      </Helmet>
      <div className="mt-[80px]">
        <div className="pb-10 gap-4">
          {pricingData.map((category, index) => (
            <Card key={index} className="text-center mb-4 mx-auto max-w-md">
              <h2 className="uppercase text-bold text-black pt-6">
                {category[Object.keys(category)[0]]}
              </h2>
              <CardBody>
                {category.items.map((item, idx) => (
                  <Typography key={idx} color="blue-gray" className="mb-2">
                    {item.item} - {item.price}
                  </Typography>
                ))}
              </CardBody>
              <CardFooter className="pt-0">
                <Link to="https://book.squareup.com/appointments/0hk2upenp7arb9/location/7N3C0JTX3CREB/services">
                  <Button
                    style={{
                      backgroundColor: 'black',
                      color: 'white',
                    }}
                    onClick={handleClick}
                  >
                    book now
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-white mb-5 text-[10px] text-center pl-[40px]">
          <div className="max-w-lg mx-auto text-left">
            <p>
              * Package expires within 60 days of purchase for 10 and 15 packs.{' '}
              <br />
              * Package expires within 30 days for 5 pack. <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Pricing.propTypes = {
  pricingData: PropTypes.array.isRequired,
};

export default Pricing;
