import { useEffect, useState } from "react";
import Logo from "/transparent-logo.svg";

const Footer = () => {
  const iconsTab = [
    {
      icon: <ion-icon name="logo-instagram"></ion-icon>,
      url: "https://instagram.com/brentmcmillan_?igshid=MzRlODBiNWFlZA==",
    },
    {
      icon: <ion-icon name="logo-youtube"></ion-icon>,
      url: "https://www.youtube.com/",
    },
    {
      icon: <ion-icon name="logo-google"></ion-icon>,
      url: "https://www.google.ca/",
    },
    {
      icon: <ion-icon name="logo-facebook"></ion-icon>,
      url: "https://www.facebook.com/brent.mcmillan.12",
    },
  ];
  const email = "info@nycbiomechanics.com                             ";
  const subject = "training";
  const body = "Hello,";
  // const phone = "555.555.555";

  const [mapLink, setMapLink] = useState("");

  useEffect(() => {
    function openMaps() {
      const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const android = /Android/.test(navigator.userAgent);

      if (iOS) {
        setMapLink(
          <a
            href="https://maps.apple.com/?q=25+W+14th+Street,+New+York,+NY+10011"
            target="_blank"
            rel="noopener noreferrer"
          >
            25 W 14th Street
            <br /> New York, New York
            <br /> 10011
          </a>
        );
      } else if (android) {
        setMapLink(
          <a
            href="https://maps.google.com/maps?q=25+W+14th+Street,+New+York,+NY+10011"
            target="_blank"
            rel="noopener noreferrer"
          >
            25 W 14th Street
            <br /> New York, New York
            <br /> 10011
          </a>
        );
      } else {
        setMapLink(
          <a
            href="https://maps.google.com/maps?q=25+W+14th+Street,+New+York,+NY+10011"
            target="_blank"
            rel="noopener noreferrer"
          >
            25 W 14th Street
            <br /> New York, New York
            <br /> 10011
          </a>
        );
      }
    }

    openMaps();
  }, []);

  return (
    <>
      <footer className="bg-[#030201] pb-5 lg:pt-9">
        <div className="container lg:mx-12 py-[rem]">
          {/* footer div all */}
          <div className="flex justify-between flex-col md:flex-row  items-center md:items-start text-left">
            {/* logo side */}
            <div className="flex flex-col  md:p-0 py-4 gap-8">
              <img src={Logo} alt="footer_logo" className="w-[15rem]" />
              {/* socials */}
              <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
                {iconsTab.map(({ icon, url }, index) => {
                  return (
                    <a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        //   CHANGE BACKGROUND
                        className="text-2xl p-2 rounded-full hover:bg-white hover:text-black"
                        style={{ transition: "all 0.3s" }}
                      >
                        {icon}
                      </div>
                    </a>
                  );
                })}
              </div>
              <p className="text-sm text-[#646464] w-[14.876rem]">
                All rights reserved. <br />
                NYC Biomechanics. © {new Date().getFullYear()}
              </p>
            </div>

            {/* middle div */}
            <div className="w-[14.876rem] flex flex-col relative pb-5 text-[#646464] lg:text-[18px]">
              <p className="font-bold footer-main text-lg uppercase lg:text-[18px]">
                Contact
              </p>

              {/* <p className="font-semibold">Phone</p>
              <a href={`tel:${phone}`}>{phone}</a> */}
              <p className="font-semibold lg:text-[18px]">Email</p>

              <a href={`mailto:${email}?subject=${subject}&body=${body}`}>
                {email}
              </a>
            </div>
            {/* right div */}
            <div className="flex flex-col relative w-[14.876rem] text-[#646464] pb-5 lg:text-[18px]">
              <p className=" font-bold footer-main text-lg uppercase lg:text-[18px]">
                Working Hours
              </p>
              <p className="font-semibold">Monday - Friday:</p>
              <p className="">9:00am - 7:00pm</p>
              <p className="font-semibold">Saturday:</p>
              <p className="">Closed</p>
              <p className="font-semibold">Sunday:</p>
              <p className="">10:00am - 5:00pm</p>
            </div>

            {/* middle div */}
            <div className="flex flex-col relative w-[14.876rem] text-[#646464] pb-5 lg:text-[18px]">
              <p className=" font-bold footer-main text-lg lg:text-[18px] uppercase">
                Location
              </p>
              <div className="font-semibold">{mapLink}</div>
            </div>
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
