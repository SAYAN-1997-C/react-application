import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { play, info } from "../../../assets";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import DashboardService from './DashboardService';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


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

  console.log(sessionStorage.getItem("mytoken"))

  let dashboardServiceObject = new DashboardService();
  const [error, setError] = useState(false);
  const saveSong = (song) => {

    if (sessionStorage.getItem("mytoken") === null) {
      console.log("Need to be login");
      setErrorMessage("Need to be login");
      setError(true);
      handleClick();
      return;
    }

    const newSong = {
      "playlistid": sessionStorage.getItem("mailid") + "" + "" + song.id,
      "href": song.href,
      "songname": song.name,
      "albumid": song.albumId,
      "albumname": song.albumName,
      "artistname": song.artistName,
      "email": sessionStorage.getItem("mailid"),
    }

    dashboardServiceObject.saveSongInPlayList(newSong).then((res) => {
      console.log("Song added in playlist successfully.");
      setSuccessMessage("Song added in playlist successfully");
      handleClick();
      setError(false);
      console.log(res);
    }).catch((error) => {
      console.log("Song has been already added in playlist");
      setErrorMessage("Song has been already added in playlist")
      setError(true);
      handleClick();
      console.log(error)
    })


  }

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);

  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (

    <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-11 min-h-screen gap-6">
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        {!error ? <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {successMessage}
        </Alert> : <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>}
      </Snackbar>
      {colors.map((color) => {
        return (
          <div className="py-2 ">
            <div
              style={{
                background: "orange",
                borderRadius: 8,
                // padding: "10px",
              }}
              className="flex h-32 justify-center items-center"
            >

              <BootstrapTooltip title="Play">
                <img
                  src={play}
                  className=" w-[20%] h-8 cursor-pointer"
                />
              </BootstrapTooltip>

              <BootstrapTooltip title="Add Playlist">
              <img
                src={info}
                className={`w-[20%] h-6 cursor-pointer `}
                onClick={() => saveSong(color)}
              />
              </BootstrapTooltip> 
            </div>
            <p className="truncate pr-2 2xl:pr-6 text-white text-sm">{color.name}</p>
          </div>
        );
      })}
    </div>
    // </Carousel>
  );
};

export default MultiCarousel;
