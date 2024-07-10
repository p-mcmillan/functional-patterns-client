import { useState, useEffect } from 'react';
import Logo from '/logo-white.svg';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import Button from '../Button/Button';

let timer; // Declare the timer variable here
const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open, setOpen] = useState(false); // State to control mobile menu

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      setShow(true); // Always show the Navbar when scrolling
      clearTimeout(timer); // Reset the timer

      // Set the timer to hide the Navbar after 3 seconds of inactivityn
      timer = setTimeout(() => {
        setShow(false);
      }, 1500);

      // Remember the current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // Cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const handleClick = () => {
    console.log('Button was clicked!');
  };

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setOpen(false);
  };

  return (
    <nav
      className={`active ${
        show && 'hidden'
      } bg-[#030201] opacity-90 fixed w-full top-0 z-50 text-white`}
    >
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 py-3 px-6 md:w-auto w-full flex justify-between items-center text-white">
          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              className="md:cursor-pointer h-12 text-white mx-auto"
            />
          </Link>

          <div
            className=" text-[40px] md:hidden flex justify-center items-center"
            onClick={() => setOpen(!open)}
          >
            <ion-icon
              className="mx-auto"
              name={`${open ? 'close' : 'menu'}`}
            ></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link
              to="/"
              className="py-7 px-3 inline-block font-BebasNeue text-[28px] tracking-[2px]"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <NavLinks closeMobileMenu={closeMobileMenu} />{' '}
          {/* Pass the closeMobileMenu function */}
          <li>
            <Link
              to="/pricing"
              className="py-7 px-3 inline-block font-BebasNeue text-[28px] tracking-[2px]"
              onClick={closeMobileMenu}
            >
              pricing
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className="py-7 px-3 inline-block font-BebasNeue text-[28px] tracking-[2px]"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="md:block hidden">
          <Link to="/sign-up">
            <Button
              onClick={handleClick}
              style={{ backgroundColor: 'blue', color: 'white' }}
            >
              sign up!
            </Button>
          </Link>
        </div>
        {/* Mobile */}
        <ul
          className={`
        md:hidden bg-[#030201] fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? 'left-0' : 'left-[-100%]'}
        `}
        >
          <li className="text-[28px] font-BebasNeue tracking-[2px]">
            <Link
              to="/"
              className="py-7 px-3 inline-block "
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <NavLinks closeMobileMenu={closeMobileMenu} />{' '}
          {/* Pass the closeMobileMenu function */}
          <li>
            <Link
              to="/pricing"
              className="py-7 px-3 inline-block font-BebasNeue text-[28px] tracking-[2px]"
              onClick={closeMobileMenu}
            >
              pricing
            </Link>
          </li>
          <li className="text-[28px] font-BebasNeue tracking-[2px]">
            <Link
              to="/contact-us"
              className="py-7 px-3 inline-block "
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <div className="py-5">
            <Link to="/sign-up">
              <Button
                onClick={closeMobileMenu}
                style={{ backgroundColor: 'blue', color: 'white' }}
              >
                sign up!
              </Button>
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
