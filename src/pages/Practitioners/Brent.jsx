import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Button from '../../components/Button/Button';
import ReactGA from 'react-ga4';

const Brent = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: '/practitioners/brent-mcmillan',
      title: 'Practitioners',
    });
  });
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    ReactGA.event({
      category: 'User Interaction',
      action: 'Clicked Button',
      label: 'Button Get Started', // Optional
    });
    navigate('/sign-up');
  };
  return (
    <div className="flex flex-col items-center px-[15px] py-[80px] text-center">
      <Helmet>
        <meta charset="UTF-8" />
        <title>
          Brent McMillan - NYC Biomechanics - Human Biomechanics Specialist
          Level 2
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content="Brent McMillan - Human Biomechanics Specialist Level 2"
        />
        <meta
          name="keywords"
          content="Functional Patterns New York, NYC, Biomechanics, NYC Biomechanics, Brent McMillan, mcmillan, Brent, New York City, Functional Patterns NYC, Manhattan, Brooklyn, Training, Fitness, Movement, Posture, Corrective exercise, Strength training, Mobility, Neuromuscular re-education, Core stability, Alignment, Injury prevention, Movement efficiency, Body awareness, Functional training, Kinetic chain, Balance, Flexibility, Rehabilitation, Sports performance, Range of motion, Dynamic movement, Motor control"
        />
        <meta name="theme-color" content="#303030" />
        <meta name="copyright" content="Copyright © 2024 NYC Biomechanics" />
        <meta name="language" content="English" />
        <meta name="Classification" content="Business" />
        <meta
          name="url"
          content="https://www.nycbiomechanics.com/practitioners/brent-mcmillan"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Brent McMillan - Human Biomechanics Specialist Level 2"
        />
        <meta
          property="og:description"
          content="Brent McMillan - Human Biomechanics Specialist Level 2"
        />
        <meta
          property="og:image"
          content="https://www.nycbiomechanics.com/brent-mcmillan.jpg"
        />
        <meta
          property="og:url"
          content="https://www.nycbiomechanics.com/practitioners/brent-mcmillan"
        />
        <meta property="og:site_name" content="NYC Biomechanics" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.nycbiomechanics.com/practitioners/brent-mcmillan"
        />
        <meta
          name="twitter:title"
          content="Brent McMillan - Human Biomechanics Specialist Level 2"
        />
        <meta
          name="twitter:image"
          content="https://www.nycbiomechanics.com/brent-mcmillan.jpg"
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
          href="/nyc-biomechanics-logo.svg?width=76"
        />
        <link
          rel="mask-icon"
          href="https://www.nycbiomechanics.com/nyc-biomechanics-logo.svg"
          color="#5bbad5"
        />
        <link
          rel="canonical"
          href="https://www.nycbiomechanics.com/practitioners/brent-mcmillan"
        />
      </Helmet>
      <div className="my-5">
        <h2 className="lg:text-[36px]">Brent McMillan</h2>
        <p className="lg:text-[18px]">Human Biomechanics Specialist Level 2</p>
      </div>

      <div className="flex flex-col items-center p-[30px] h-full">
        <div className="mb-8">
          <img
            src="https://res.cloudinary.com/dprfd8p6y/image/upload/ar_1:1,b_rgb:ffffff,bo_5px_solid_rgb:070707,c_fill,g_auto,r_max,w_434/v1711301220/nyc-biomechanics/images/Brent-McMillan_nj0a15.jpg"
            alt="Brent McMillan"
          />
        </div>
        <div className="mb-[15px] lg:max-w-[989px] lg:text-[18px]">
          <p className="mb-[15px] ">
            {' '}
            As A kid I was always into sports. Although a bit of an introvert I
            enjoyed participating in races and playing football with my friends.
            I was one of if not the fastest in my grade. Unfortunately when I
            was 8 years old I was involved in a hit and run car accident which
            left me pretty banged up. I got x-rays which showed no broken bones
            so I went about my life as if nothing happened.{' '}
          </p>
          <p className="mb-[15px]">
            {' '}
            I was raised in a tough environment in Brooklyn and from a hard
            nosed Caribbean family where the men wouldn’t dare complain. If
            there was an issue, you sucked it up and continued on, which is what
            I did. It wasn’t until my high school years when I made my high
            school basketball team is when the pain really got to the point I no
            longer could ignore it. Some days I was able to push through, other
            days I would have to miss multiple practices as well as games.{' '}
          </p>
          <p className="mb-[15px]">
            By the time I was 24 I was fed up of trying to ignore the way my
            body felt. There were many times I would walk and my hip would give
            out and I would collapse on to the ground. I had to think if it was
            already this bad, I can’t imagine what it would be like in my 30’s
            or 40’s. The pain was every where at this point. Hip pain, knee
            pain, shoulder and neck pain. Areas of my body I couldn’t even feel.
            It felt likes chunks of my body were missing. While others were so
            stiff and compressed. So I went down the rabbit hole of trying
            traditional physical therapists, chiropractors, massage therapists,
            acupuncture and cupping, steroid shots and nothing helped. If it did
            it was temporary at most. I felt stuck.
          </p>
          <p className="mb-[15px]">
            I was a personal trainer at the time and began looking for a way to
            train myself and my clients out of the constant nagging injuries. I
            eventually found a method called Functional Patterns and went
            through the certification process. I come from an engineering
            background which is what I studied at Drexel University. What stood
            out to me about FP is how it forced me to think more like an
            engineer and less like a “gym bro”. FP stressed the importance of
            biomechanics and talked about the big 4, standing, walking, running
            , and throwing. That there was a blueprint to human movement. One
            that respected human biology and the laws of physics. Fast forward
            to now. I’m in my mid thirties and feel like I have a new lease on
            life. One that was filled with depression and unhealthy coping
            mechanisms to now being more than hopeful to getting to the other
            side of this. I’ve gained sustainable muscle and run faster than I
            did in my twenties and without the chronic pain.
          </p>
          <p className="mb-[15px]">
            Over the years, training as a Functional Patterns practitioner
            I&apos;ve worked with clients from diverse backgrounds and varying
            levels of injuries. A recurring comment I hear is, &quot;Wow!
            I&apos;m amazed at how great my body feels!&quot; Many clients,
            including myself, initially hold certain beliefs about training and
            how the body functions. However, after incorporating FP techniques
            into just a few sessions, they gain a fresh perspective on their
            bodies and move with newfound understanding and vitality, eager for
            more!
          </p>
          <p className="mb-[15px]">
            Join the global community of thousands and embark on your journey to
            rediscover the innate human ability to move! Whether you&apos;re
            seeking relief from pain, striving for fitness, or aspiring to
            enhance your athleticism, I&apos;m committed to helping you achieve
            your goals.
          </p>
        </div>

        <Button
          className=""
          onClick={handleClick}
          style={{
            backgroundColor: 'black',
            color: 'white',
          }}
        >
          {' '}
          get started
        </Button>
      </div>
    </div>
  );
};

export default Brent;
