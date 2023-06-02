import "react-multi-carousel/lib/styles.css";
import MultiCarousel from "./MultiCarousel";
import React from "react";
import { UserContext } from '../../../App';
import { useContext } from 'react'


const Dashboard = () => {

  const songArr = useContext(UserContext);
  console.log(songArr);
  return (
    <div className="">
      <div className="p-4">
        <MultiCarousel colors={songArr} />
        
      </div>

    </div>
  );
};

export default Dashboard;
