import React, { useEffect } from "react";
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

  const eventHandle = (song) => {
    console.log(song)
  }
  return (
    <Carousel
      
      deviceType={deviceType}
      autoPlay={true}
      itemClass="image-item"
      responsive={responsive}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      showDots={false}
    >
      {colors.map((color) => {
        return (
          <div>
            <div
              style={{
                background: "orange",
                width: 130,
                height: 130,
                borderRadius: 20,
                padding: "10px",
              }}
            >
              <BootstrapTooltip title="Add to Playlist">
                <img
                  src={info}
                  onClick={()=> eventHandle(color) }
                  className="absolute left-24 top-4 w-[10%] cursor-pointer"
                />
              </BootstrapTooltip>

              <BootstrapTooltip title="Play">
                <img
                  src={play}
                  className="absolute left-14 top-14 w-[10%] cursor-pointer"
                />
              </BootstrapTooltip>
            </div>
            <p className="truncate pr-6 text-white text-sm">{color.name}</p>
          </div>
        );
      })}
    </Carousel>
  );
};

export default MultiCarousel;
