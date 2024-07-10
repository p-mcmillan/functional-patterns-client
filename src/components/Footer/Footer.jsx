import { useEffect, useState } from 'react';
import Logo from '/logo-white.svg';

const Footer = () => {
  const iconsTab = [
    {
      icon: <ion-icon name="logo-instagram"></ion-icon>,
      url: 'https://www.instagram.com/nycbiomechanics/',
    },
    {
      icon: <ion-icon name="logo-google"></ion-icon>,
      url: 'https://maps.app.goo.gl/VzM6SEaMZfeznTJq8',
    },
    {
      icon: <ion-icon name="logo-facebook"></ion-icon>,
      url: 'https://www.facebook.com/brent.mcmillan.12',
    },
  ];

  const subject = 'training';
  const body = 'Hello,';
  const phone = '+1-646-934-5979';
  const phone2 = '646 934 5979';

  const [mapLink, setMapLink] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    function openMaps() {
      const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const android = /Android/.test(navigator.userAgent);

      const address = (
        <>
          25 W 14th Street
          <br /> New York, New York
          <br /> 10011
        </>
      );

      if (iOS) {
        setMapLink(
          <a
            href="https://maps.apple.com/?q=25+W+14th+Street,+New+York,+NY+10011"
            target="_blank"
            rel="noopener noreferrer"
          >
            {address}
          </a>
        );
      } else if (android) {
        setMapLink(
          <a
            href="https://maps.google.com/maps?q=25+W+14th+Street,+New+York,+NY+10011"
            target="_blank"
            rel="noopener noreferrer"
          >
            {address}
          </a>
        );
      } else {
        setMapLink(
          <a
            href="https://maps.google.com/maps?q=25+W+14th+Street,+New+York,+NY+10011"
            target="_blank"
            rel="noopener noreferrer"
          >
            {address}
          </a>
        );
      }
    }

    openMaps();

    function obfuscateEmail(user, domain, extension) {
      const obfuscatedEmail = `${user}@${domain}.${extension}`;
      const mailtoLink = `mailto:${obfuscatedEmail}?subject=${subject}&body=${body}`;
      setEmail(<a href={mailtoLink}>{obfuscatedEmail}</a>);
    }

    obfuscateEmail('info', 'nycbiomechanics', 'com');
  }, []);

  return (
    <footer className="bg-[#030201] pb-5 lg:pt-9">
      <div className="container lg:mx-12 py-[rem]">
        <div className="flex justify-between flex-col md:flex-row items-center md:items-start text-left">
          <div className="flex flex-col md:p-0 py-4 gap-8">
            <img src={Logo} alt="footer_logo" className="w-[15rem]" />
            <div className="flex gap-7 text-[18px] text-white justify-center md:justify-start">
              {iconsTab.map(({ icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="text-2xl p-2 rounded-full hover:bg-white hover:text-black"
                    style={{ transition: 'all 0.3s' }}
                  >
                    {icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="w-[14.876rem] flex flex-col relative pb-5 text-[#646464] lg:text-[18px]">
            <p className="font-bold footer-main text-lg uppercase lg:text-[18px] text-white">
              Contact
            </p>

            <p className="font-semibold">Phone</p>
            <a href={`tel:${phone}`}>{phone2}</a>
            <p className="font-semibold lg:text-[18px]">Email</p>

            {email}
          </div>

          <div className="flex flex-col relative w-[14.876rem] text-[#646464] pb-5 lg:text-[18px]">
            <p className="font-bold footer-main text-lg text-white uppercase lg:text-[18px]">
              Working Hours
            </p>
            <p className="font-semibold">Monday - Friday:</p>
            <p>9:00am - 7:00pm</p>
            <p className="font-semibold">Saturday:</p>
            <p>Closed</p>
            <p className="font-semibold">Sunday:</p>
            <p>10:00am - 5:00pm</p>
          </div>

          <div className="flex flex-col relative w-[14.876rem] text-[#646464] pb-5 lg:text-[18px]">
            <p className="font-bold footer-main text-lg text-white lg:text-[18px] uppercase">
              Location
            </p>
            <div className="font-semibold">{mapLink}</div>
          </div>
          <span></span>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="text-sm text-[#646464]">
          © {new Date().getFullYear()} NYC Biomechanics. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
