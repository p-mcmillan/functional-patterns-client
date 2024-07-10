import RenderOnViewportEntry from '../../components/RenderOnViewportEntry/RenderOnViewportEntry';
import { useEffect, useRef } from 'react';
import { lazy } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga4';

const Hero = lazy(() => import('../../components/Hero/Hero'));
const Info = lazy(() => import('../../components/Info/Info'));
const ResultsMain = lazy(() => import('../Results/ResultsMain'));
const ResultsSub = lazy(() => import('../Results/RrsultsSub'));
const Social = lazy(() => import('../Social/Social'));
const GetStart = lazy(() => import('../GetStart/GetStart'));
const AboutUs = lazy(() => import('../AboutUs/AboutUs'));

const Home = (props) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: '/',
      title: 'Home',
    });
  });
  const infoRef = useRef(null);
  const resultsMainRef = useRef(null);

  const scrollToElement = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  };

  const scrollToInfo = () => {
    scrollToElement(infoRef);
  };

  useEffect(() => {}, []);

  return (
    <div className=" snap-mandatory snap-y relative text-center">
      <Hero
        videoHeroData={props.videoHeroData}
        scrollToInfo={scrollToInfo}
        infoRef={infoRef}
      />

      <RenderOnViewportEntry
        threshold={0.25}
        rootMargin="0px 0px 0px 0px" // Correctly formatted rootMargin
        style={{ minHeight: '240px' }}
      >
        <GetStart />
      </RenderOnViewportEntry>

      <RenderOnViewportEntry
        threshold={0.25}
        rootMargin="0px 0px 0px 0px" // Correctly formatted rootMargin
        style={{ minHeight: '240px' }}
      >
        <Info ref={infoRef} infoVideoData={props.infoVideoData} />
      </RenderOnViewportEntry>

      <RenderOnViewportEntry
        threshold={0.25}
        rootMargin="0px 0px 0px 0px" // Correctly formatted rootMargin
        style={{ minHeight: '240px' }}
      >
        <AboutUs />
      </RenderOnViewportEntry>

      <RenderOnViewportEntry
        threshold={0.25}
        rootMargin="0px 0px 0px 0px" // Correctly formatted rootMargin
        style={{ minHeight: '240px' }}
      >
        <ResultsMain
          videoHeroData={props.videoHeroData}
          resultsMainRef={resultsMainRef}
        />
      </RenderOnViewportEntry>

      <RenderOnViewportEntry
        threshold={0.25}
        rootMargin="0px 0px 0px 0px" // Correctly formatted rootMargin
        style={{ minHeight: '240px' }}
      >
        <ResultsSub
          photoResultsData={props.photoResultsData}
          setOpenPopup={props.setOpenPopup}
        />
      </RenderOnViewportEntry>

      <RenderOnViewportEntry
        threshold={0.25}
        rootMargin="0px 0px 0px 0px" // Correctly formatted rootMargin
        style={{ minHeight: '240px' }}
      >
        <Social />
      </RenderOnViewportEntry>
    </div>
  );
};

Home.propTypes = {
  photoResultsData: PropTypes.array.isRequired,
  videoHeroData: PropTypes.array.isRequired,
  setOpenPopup: PropTypes.func.isRequired,
  infoVideoData: PropTypes.array.isRequired,
};

export default Home;
