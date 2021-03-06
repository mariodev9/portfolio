import React from "react";
import { motion } from "framer-motion";
import "../assets/css/Navbar.css";

export default function Navbar() {
  return (
    <motion.div
      className="container"
      animate={{ y: [-600, 0] }}
      transition={{ duration: 1 }}
    >
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="130"
            height="24"
            viewBox="0 0 130 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M43.5328 0L30.3682 24H40.9896L42.9344 20.1212H44.2808L46.3003 24H56.6973L43.5328 0ZM42.4108 16.4848L40.7652 19.3939L40.466 16L41.8124 13.6566V11.2323L43.5328 8.08081L45.2532 11.2323V13.6566L46.7491 16L46.3003 19.3939L44.8044 16.4848H42.4108Z"
              fill="#D3D3D3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M59.9137 0H72.6295C79.5857 -3.14892e-07 84.672 9.88679 75.397 14.2642C76.7434 14.7925 78.374 16.8151 82.2037 24H75.397L71.7319 17.1321C70.6099 15.0943 69.7871 15.0943 66.5708 15.0943V24H59.9137V12V0ZM70.8343 10.2642C75.397 10.2642 75.397 4.5283 70.8343 4.5283H66.5708V10.2642H70.8343Z"
              fill="#D3D3D3"
            />
            <path
              d="M25.9551 24V0H20.7192L13.015 13.6566L5.98389 0H0V24H5.98389V11.2323L11.2946 20.6792H14.8101L20.2704 10.8679V24H25.9551Z"
              fill="#D3D3D3"
            />
            <path d="M84.672 0V24H91.1795V0H84.672Z" fill="#D3D3D3" />
            <path
              d="M106.659 21.8491C108.497 23.2049 110.732 24 113.143 24C117.825 24 121.845 21.0012 123.578 16.7208C117.418 20.8314 109.732 21.8524 106.659 21.8491Z"
              fill="#D3D3D3"
            />
            <path
              d="M113.143 0C106.876 0 101.795 5.37258 101.795 12C101.795 13.7878 102.165 15.4843 102.828 17.0087C103.146 17.7399 103.532 18.4314 103.976 19.0745C110.501 18.3466 119.521 15.7434 124.47 12.7304C124.483 12.4888 124.49 12.2453 124.49 12C124.49 11.4335 124.453 10.8761 124.381 10.3304C123.613 4.49329 118.874 0 113.143 0Z"
              fill="#D3D3D3"
            />
            <path
              d="M102.828 17.0087C99.1152 18.0104 98.8364 15.1304 99.1611 13.5652C93.0774 18.5522 97.1686 19.8339 103.976 19.0745C103.532 18.4314 103.146 17.7399 102.828 17.0087Z"
              fill="#D3D3D3"
            />
            <path
              d="M124.381 10.3304C124.453 10.8761 124.49 11.4335 124.49 12C124.49 12.2453 124.483 12.4888 124.47 12.7304C133.855 6.63652 129.204 5.3913 125.706 5.53043C126.766 8.78609 126.485 8.45217 124.381 10.3304Z"
              fill="#D3D3D3"
            />
          </svg>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"> </span>
          </button>

          <div
            className="collapse navbar-collapse background-collapse"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a href="#about" className="nav-link">
                About me
              </a>
              <a href="#proyects" className="nav-link">
                Proyects
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </motion.div>
  );
}
