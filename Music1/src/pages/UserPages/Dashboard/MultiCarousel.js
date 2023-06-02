import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { play, info } from "../../../assets";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    paritialVisibilityGutter: 60,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 404 },
    items: 1.75,
    paritialVisibilityGutter: 40,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 404, min: 0 },
    items: 2,
    paritialVisibilityGutter: 40,
    slidesToSlide: 1,
  },
};

const MultiCarousel = ({ deviceType, colors }) => {
  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));
  return (
    // <Carousel
    //   deviceType={deviceType}
    //   autoPlay={true}
    //   itemClass="image-item"
    //   responsive={responsive}
    //   removeArrowOnDeviceType={["tablet", "mobile"]}
    //   showDots={false}
    // >
    <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-10 min-h-screen ">
      {colors.map((color) => {
        return (
          <div className="py-2">
            <div
              style={{
                background: "#34495E",
                borderRadius: 8,
                padding: "10px",
              }}
              className="flex  justify-center w-24 h-24"
            >
             

              <BootstrapTooltip title="Play">
                <img
                  src={play}
                  className=" w-[28%] cursor-pointer"
                />
              </BootstrapTooltip>
            </div>
            <p className="truncate pr-6 2xl:pr-12 text-white text-sm">{color.name}</p>
          </div>
        );
      })}
      </div>
    // </Carousel>
  );
};

export default MultiCarousel;
