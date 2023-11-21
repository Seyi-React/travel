import React from "react";
import video from "../../assets/surf.mp4";
import styles from "./Home.module.css";



const Home = () => {
  return (
    <div className={styles.Home_container}>
    <video
      src={video}
      type="video/mp4"
      loop
      muted
      autoPlay
      className={styles.video_play}
    />
    <div className={styles.overlay}>
        <div className={styles.over}>
        <p>Our packages</p>
      <h1>Search Your <br /> Holiday</h1>
      </div>
      <div>
         <div>
             <label htmlFor=""> Select Destination</label>
             <input type="text" name="" placeholder="Enter your destination" />
         </div>
         <div>
             <label htmlFor="">Select Date</label>
             <input type="date" />
         </div>
         <div>
             <label htmlFor="">Max Price : $5000</label>
             <input type="range" min={1000} max={5000}/>
         </div>
      </div>
    </div>
  </div>
  );
};

export default Home;
