import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MultiCarousel from "./MultiCarousel";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ScaleLoader from "react-spinners/ScaleLoader";

const Dashboard = () => {
  const [songArr, setSongArr] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.napster.com/v2.0/playlists/pp.225974698/tracks?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm&limit=200"
      )
      .then((res) => {
        console.log(res.data.tracks);
        setSongArr(res.data.tracks);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

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

  return (
    <div className="px-10 h-[90vh] overflow-hidden ">
      <div className="w-screen md:w-screen">
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
