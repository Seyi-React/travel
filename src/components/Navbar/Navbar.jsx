import React from 'react'
import  styles from './navbar.module.css'
import { MdTravelExplore } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
    
           <div className="travel_top">
            <div className={styles.top}>
                <div className={styles.logo}>
                        <MdTravelExplore size={29} color='#2e0359'/>
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
                    <TbGridDots color='#2e0459' size={30}/>
                </div>
            </div>
           </div>
        </div>
  )
}

export default Navbar