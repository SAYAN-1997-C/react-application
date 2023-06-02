import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { play, add, song } from "../../../assets";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import DashboardService from './DashboardService';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import PlaySong from "../PlaySong";


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
  const token = sessionStorage.getItem('mytoken');
  const navigate = useNavigate();
  const songHandler = (props) => {
    return(
      navigate('/playsong', {state: props}),
      console.log(props)
    )
  }


  return (

    <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-11 min-h-screen gap-6">
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        {token !== null && !error ? <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
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
                // background: "orange",
                borderRadius: 8,
                // backgroundImage: `url(${song})`
              }}
              className="h-32 opacity-90 hover:opacity-100 transition duration-200 ease-in-out hover:scale-105 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate"
            >
              
              <div className="flex justify-end ">
                <BootstrapTooltip title="Add to Playlist">
                  <img
                    src={add}
                    className={`w-[30%] h-8 pt-2 cursor-pointer opacity-100 hover:opacity-90`}
                    onClick={() => saveSong(color)}
                  />
                </BootstrapTooltip>
              </div>

              <div className="flex justify-center pt-3">
                <BootstrapTooltip title="Play">
                  <img
                    src={play}
                    className=" w-[20%] h-8 cursor-pointer"
                    onClick={()=>songHandler(color)}
                  />
                </BootstrapTooltip>
              </div>
            </div>
            <p className="truncate pr-2 2xl:pr-6 text-white text-sm">{color.name}</p>
            
          </div>
        );
      })}
    </div>
  );
};

export default MultiCarousel;
