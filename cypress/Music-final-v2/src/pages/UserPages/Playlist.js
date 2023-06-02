import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react"
import { play,remove } from '../../assets';
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';


export default function Playlist() {
  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: "red",
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "red",
    },
  }));
  const [favarr, setFavarr] = useState([])

  const removeFromPlaylist = (song) => {
    console.log(song)

    let playlistId = song.playlistid;

    axios.delete(`http://localhost:9098/playlist/delete/${playlistId}`, {
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem("mytoken")}`
      },
    }).then((res) => {

      if (res.status === 200) {
        setFavarr(favarr.filter((song) => song.playlistid !== playlistId));
        setSuccessMessage("Song Deleted Successfully");
        handleClick();
        console.log("Record Deleted");
        console.log(res);
      }

    }).catch((error) => {
      console.log("Error occured!!");
      console.log(error)
    })
  }

  useEffect(() => {
    let mailid = sessionStorage.getItem("mailid");
    axios.get(`http://localhost:9098/playlist/view/${mailid}`, {
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem("mytoken")}`
      },
    }).then((res) => {
      console.log(res);
      setFavarr(res.data);

    }).catch((error) => {
      console.log(error);

    })
  }, []);

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
  const navigate = useNavigate();
  const songHandler = (props) => {
    return(
      navigate('/playsong', {state: props}),
      console.log(props)
    )
  }
  console.log(favarr);
  return (
    <div className="text-white min-h-[81.7vh] text-xl">
      {favarr.length ===0 ? <p classname="">Playlist is Empty !!</p> :
      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-10  text-white p-4 gap-4">
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        {successMessage.length > 0 ? <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {successMessage}
        </Alert> : <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>}
      </Snackbar>
      {
        favarr.map((song) =>
          <div className="py-2 ">
            <div
              style={{
                background: "coral",
                borderRadius: 8,
              }}
              className="h-32 opacity-90 hover:opacity-100 transition duration-200 ease-in-out hover:scale-105"
            >

              <div className="flex justify-end ">
                <BootstrapTooltip title="Remove from playlist">
                  <img
                    src={remove}
                    className={`w-[30%] h-8 pt-2 pl-2 cursor-pointer opacity-100 hover:opacity-90 rotate-[50deg]`}
                    onClick={() => removeFromPlaylist(song)}
                  />
                </BootstrapTooltip>
              </div>

              <div className="flex justify-center pt-3">
                <BootstrapTooltip title="Play">
                  <img
                    src={play}
                    className=" w-[20%] h-8 cursor-pointer"
                    onClick={()=>songHandler(song)}
                  />
                </BootstrapTooltip>
              </div>
            </div>
            <p className="truncate pr-2 2xl:pr-6 text-white text-sm">{song.songname}</p>
          </div>
        )
      }
    </div>}
    </div>
  )
}