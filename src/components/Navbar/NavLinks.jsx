import { Link } from "react-router-dom";
import { links } from "./Mylinks";
import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const NavLinks = ({ closeMobileMenu }) => {
  const [hedding, setHedding] = useState("");
  const [subHedding, setSubHedding] = useState(" ");

  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className="px-3 text-left md:cursor-pointer group z-20">
            <h1
              className=" py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                hedding !== link.name ? setHedding(link.name) : setHedding("");
                setSubHedding("");
              }}
            >
              {link.name}
              <span className=" text-xl md:hidden inline md:mt-1 md:ml-2">
                {/* filter for the chevron */}
                <ion-icon
                  name={`${
                    hedding === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block z-10">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-[#030201] rotate-45"></div>
                  </div>
                  <div className="bg-[#030201] p-3.5 grid-cols-3 gap-10">
                    {link.sublink.map((submenulink, index) => (
                      <div key={index}>
                        <h1 className="text-lg font-semibold">
                          <Link
                            to={submenulink.to}
                            onClick={() =>
                              closeMobileMenu()
                            } /* Close the mobile menu */
                          >
                            {submenulink.Head}
                          </Link>
                        </h1>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile Menu */}
          <div
            className={`${hedding === link.name ? "md:hidden" : "hidden"} z-10`}
          >
            {/* sublinks */}
            {link.sublink &&
              link.sublink.map((submenulink, index) => (
                <div key={index}>
                  <div>
                    <h1
                      onClick={() =>
                        subHedding !== submenulink.Head
                          ? setHedding(submenulink.Head)
                          : setSubHedding("")
                      }
                      className="py-4 pl-7 md:pr-0 pr-5 flex justify-between items-center "
                    >
                      <Link
                        to={submenulink.to}
                        onClick={() =>
                          closeMobileMenu()
                        } /* Close the mobile menu */
                      >
                        {submenulink.Head}
                      </Link>

                      <span className=" text-xl md:hidden inline md:mt-1 md:ml-2"></span>
                    </h1>
                    <div
                      className={`${
                        subHedding === submenulink.Head ? "md:hidden" : "hidden"
                      }`}
                    ></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
};
NavLinks.propTypes = {
  closeMobileMenu: PropTypes.func.isRequired, // Validate closeMobileMenu prop as a required function
};

export default NavLinks;
