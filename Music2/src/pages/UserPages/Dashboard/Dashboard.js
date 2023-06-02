import "react-multi-carousel/lib/styles.css";
import MultiCarousel from "./MultiCarousel";
import React from "react";
import {UserContext} from '../../../App';
import {useContext} from 'react'

const Dashboard = () => {
  
  const colors = [
    "red",
    "green",
    "blue",
    "orange",
    "red",
    "green",
    "blue",
    "orange",
    "red",
    "green",
    "blue",
    "orange",
  ];
  const songArr = useContext(UserContext);

  return (
    <div className="pl-5  ">
      <div className="">
        <div className="py-4">
              <MultiCarousel colors={songArr} />
        </div>
        {/* <div className="py-4">
          <MultiCarousel  />
        </div>
        <div className="py-4">
          <MultiCarousel  />
        </div>
        <div className="py-4">
          <MultiCarousel  />
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
