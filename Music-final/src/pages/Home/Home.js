import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { logo, s1, s2, s3, s4 } from "../../assets";
import "./home.css";

export default function Home() {
  const [show, setShow] = useState(false);
  const showHandler = () => {
    return setShow(true);
  };

  return (
    <div className={`h-screen overflow-hidden ${show && 'hidden'}`}>
      <Carousel
        showThumbs={false}
        showIndicators={true}
        useKeyboardArrows
        transitionTime={1000}
        infiniteLoop
        emulateTouch
        autoPlay
        className={`pb-20 bg-slate-800 `}
      >
        <div className="">
          <p className="legend1">
            <img src={logo} style={{ width: "48px", paddingRight: "3px" }} />
            MuZix
          </p>
          <img src={s1} style={{ height: "100vh", color: "#fff" }} />
          <p className="legend cursor-pointer " onClick={showHandler}>
            Get Started
          </p>
        </div>
        <div>
          <p className="legend1">
            <img src={logo} style={{ width: "48px", paddingRight: "3px" }} />
            MuZix
          </p>
          <img src={s2} style={{ height: "100vh", color: "#fff" }} />
          <p className="legend cursor-pointer" onClick={showHandler}>
            Get Started
          </p>
        </div>
        <div>
          <p className="legend1">
            <img src={logo} style={{ width: "48px", paddingRight: "3px" }} />
            MuZix
          </p>
          <img src={s3} style={{ height: "100vh", color: "#fff" }} />
          <p className="legend cursor-pointer" onClick={showHandler}>
            Get Started
          </p>
        </div>
        <div>
          <p className="legend1">
            <img src={logo} style={{ width: "48px", paddingRight: "3px" }} />
            MuZix
          </p>
          <img src={s4} style={{ height: "100vh", color: "#fff" }} />
          <p className="legend cursor-pointer" onClick={showHandler}>
            Get Started
          </p>
        </div>
      </Carousel>
    </div>
  );
}
