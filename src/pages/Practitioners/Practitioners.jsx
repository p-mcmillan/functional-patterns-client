import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import ReactGA from 'react-ga4'

const Practitioners = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: '/practitioners',
      title: 'Practitioners',
    })
  })
  const navigate = useNavigate()
  const handleClick = () => {
    ReactGA.event({
      category: 'User Interaction',
      action: 'Clicked Button',
      label: 'Button Brent', // Optional
    })
    navigate('/practitioners/brent-mcmillan')
  }

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])
  return (
    <div className="flex flex-col items-center px-[15px] py-[80px] text-center min-h-screen mb-[80px] lg:mt-[80px]">
      <Helmet>
        <meta charset="UTF-8" />
        <title>NYC Biomechanics - Practitioners</title>
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
        <meta name="url" content="https://nycbiomechanics.com/practitioners" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="NYC Biomechanics - Practitioners" />
        <meta
          property="og:description"
          content="Unlock pain-free movement with our unique biomechanics training program in NYC. Experience greater mobility, strength, and flexibility. Join us today!"
        />
        <meta property="og:image" content="/image-black.png" />
        <meta property="og:url" content="https://nycbiomechanics.com/practitioners" />
        <meta property="og:site_name" content="NYC Biomechanics" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://nycbiomechanics.com/practitioners" />
        <meta name="twitter:title" content="NYC Biomechanics - Practitioners" />
        <meta name="twitter:image" content="/main-logo.jpg" />
        <link rel="icon" type="image/svg+xml" href="/logo-white.svg" />

        <link rel="apple-touch-icon" type="image/svg+xml" sizes="76x76" href="/nyc-biomechanics-logo.svg?width=76" />
        <link rel="mask-icon" href="/nyc-biomechanics-logo.svg" color="#5bbad5" />
        <link rel="canonical" href="https://nycbiomechanics.com/practitioners" />
      </Helmet>
      <h2 className="py-5 text-center text-black uppercase mb-4 px-6 lg:text-[36px]">
        We understand what it’s like to be in pain and have a passion for getting you out of it.
      </h2>
      <p className="lg:text-[18px]">
        We are committed to helping you identify and break through physical barriers to live pain-free through NYC
        Biomechanics.
      </p>

      <div className="flex flex-col items-center p-[30px]">
        <div>
          <img
            src="https://res.cloudinary.com/dprfd8p6y/image/upload/c_thumb,w_320,g_face/v1711301220/nyc-biomechanics/images/Brent-McMillan_nj0a15.jpg"
            alt="Brent McMillan"
          />
        </div>

        <div className="my-5">
          <h2>Brent McMillan</h2>
          <p className="lg:text-[18px]">Human Biomechanics Specialist Level 2</p>
        </div>

        <Button
          className=""
          onClick={handleClick}
          style={{
            backgroundColor: '#030201',
            color: 'white',
            opacity: 0.75,
          }}
        >
          see full bio
        </Button>
      </div>
    </div>
  )
}

export default Practitioners
