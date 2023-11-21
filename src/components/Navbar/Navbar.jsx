import React, { useState } from "react";
import styles from "./navbar.module.css";
import { MdTravelExplore } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [toggle, setToggle] = useState("false");

  const openSideNavbar = () => {
    setToggle(true);
  };
  const closeSideNavbar = () => {
    setToggle(false);
  };
  return (
    <div className={styles.navbar}>
      <div className="travel_top">
        <div className={styles.top}>
          <div className={styles.logo}>
            <MdTravelExplore size={29} color="#2e0359" />
            <h3>Travel</h3>
          </div>
          <div className={styles.sections}>
            <li>
              <a href="">Service</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Pages</a>
            </li>
            <li>
              <a href="">News</a>
            </li>
          </div>
          <div className={styles.now}>
            <button>Book Now</button>
          </div>

          {/* Mobile */}
          <div className={styles.icon_tag}>
            <TbGridDots color="#2e0459" size={30} onClick={openSideNavbar} />
          </div>
        </div>
        <div className={styles.close}>
          {toggle && (
            <div className={styles.mobile_side}>
              <GrClose
                onClick={closeSideNavbar}
                size={26}
                style={{ position: "absolute", top: "28px", right: "20px" }}
              />
              <div className={styles.mobile}>
                <li>
                  <a href="">Service</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Pages</a>
                </li>
                <li>
                  <a href="">News</a>
                </li>

                <button>Book Now</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
