import { useEffect, useRef } from 'react'
import { lazy, Suspense } from 'react'
import ResultsMain from '../Results/ResultsMain'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga4'
//import Info from "../../components/Info/Info";
// import Hero from "../../components/Hero/Hero";
//import ResultsSub from "../Results/RrsultsSub";

const Info = lazy(() => import('../../components/Info/Info'))
const Hero = lazy(() => import('../../components/Hero/Hero'))
const ResultsSub = lazy(() => import('../Results/RrsultsSub'))

const Home = (props) => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: '/',
      title: 'Home',
    })
  })
  const infoRef = useRef(null)
  const resultsRef = useRef(null)
  const resultsMainRef = useRef(null)

  const scrollToElement = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      })
    }
  }

  const scrollToInfo = () => {
    scrollToElement(infoRef)
  }

  useEffect(() => {
    // Optionally call scrollToElement() here if needed on mount
  }, [])

  return (
    <div className=" snap-mandatory snap-y relative text-center">
      <Hero videoHeroData={props.videoHeroData} scrollToInfo={scrollToInfo} infoRef={infoRef} />

      <Info ref={infoRef} infoVideoData={props.infoVideoData} />

      {/* <div className=" snap-center bg-gradient-to-t from-black from-5% via-sky-500 via-30% to-emerald-500 to-90%"> */}

      <ResultsMain
        videoHeroData={props.videoHeroData}
        resultsMainRef={resultsMainRef}
        // photoResultsData={props.photoResultsData}
        // setOpenPopup={props.setOpenPopup}
      />

      <ResultsSub photoResultsData={props.photoResultsData} setOpenPopup={props.setOpenPopup} />
    </div>
  )
}

Home.propTypes = {
  photoResultsData: PropTypes.array.isRequired,
  videoHeroData: PropTypes.array.isRequired,
  setOpenPopup: PropTypes.func.isRequired,
  infoVideoData: PropTypes.array.isRequired,
}

export default Home
