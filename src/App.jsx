import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { lazy, Suspense } from "react";
import { Spinner } from "@material-tailwind/react";

import {
  resultsPhoto,
  resultsVideo,
  heroVideo,
  infoVideo,
} from "./constants/constants";
import { pricingMenu } from "./constants/pricing";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

import Footer from "./components/Footer/Footer";

import PopUp from "./components/PopUp/PopUp";

const Results = lazy(() => import("./pages/Results/Results"));
const Schedule = lazy(() => import("./pages/Schedule/Schedule"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Pricing = lazy(() => import("./pages/Pricing/pricing"));
const GetStart = lazy(() => import("./pages/GetStart/GetStart"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const Practitioners = lazy(() => import("./pages/Practitioners/Practitioners"));
const Brent = lazy(() => import("./pages/Practitioners/Brent"));
const Reviews = lazy(() => import("./pages/Reviews/Reviews"));

function App() {
  const [photoResultsData, setPhotoResultsData] = useState(resultsPhoto);
  const [videoResultsData, setVideoResultsData] = useState(resultsVideo);
  const [videoHeroData, setvideoHeroData] = useState(heroVideo);
  const [pricingData, setPricingData] = useState(pricingMenu);
  const [openPopup, setOpenPopup] = useState(false);
  const [infoVideoData] = useState(infoVideo);
  const HandleRemovePopUp = () => setOpenPopup(false);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen bg-black">
              {/* <Spinner className="h-36 w-36 text-white" /> */}
              loading...
            </div>
          }
        >
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  photoResultsData={photoResultsData}
                  videoHeroData={videoHeroData}
                  infoVideoData={infoVideoData}
                  setOpenPopup={setOpenPopup}
                />
              }
            />
            <Route
              path="/results"
              element={
                <Results
                  photoResultsData={photoResultsData}
                  videoResultsData={videoResultsData}
                />
              }
            />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/pricing"
              element={<Pricing pricingData={pricingData} />}
            />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/faq" element={<GetStart />} />
            <Route path="/practitioners" element={<Practitioners />} />
            <Route path="/practitioners/brent-mcmillan" element={<Brent />} />
            <Route path="reviews" element={<Reviews />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
      <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopUp} />
    </div>
  );
}

export default App;
