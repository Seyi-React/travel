import React from 'react'
import  styles from './navbar.module.css'
import { MdTravelExplore } from "react-icons/md";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
    
           <div className="travel_top">
            <div className={styles.top}>
                <div className={styles.logo}>
                        <MdTravelExplore size={29}/>
                         <h3>Travel</h3>
                </div>
                <div className="sections">
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
                <div className="now">
                    <button>Book Now</button>
                </div>
            </div>
           </div>
        </div>
  )
}

export default Navbar