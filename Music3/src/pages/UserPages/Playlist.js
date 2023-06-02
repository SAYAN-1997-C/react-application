import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react"
import { play } from '../../assets';
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";


export default function Playlist() {
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
  const [favarr, setFavarr] = useState([])

  const removeFromPlaylist = (song) => {
    console.log(song)

    let playlistId = song.playlistid;

    axios.delete(`http://localhost:9098/playlist/delete/${playlistId}`, {
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem("mytoken")}`
      },
    }).then((res) => {

        if(res.status === 200) {
            setFavarr(favarr.filter((song) => song.playlistid !== playlistId));
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

  console.log(favarr);

  return (
    <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-10 min-h-screen ">
      {
        favarr.map((song) =>
          <div className="py-2">
            <div
              style={{
                background: "orange",
                borderRadius: 8,
                padding: "10px",
              }}
              className="flex  justify-center w-20 h-20 sm:w-24 sm:h-24"
            >   
            <BootstrapTooltip title="Remove from playlist">
                <img
                  src={play}
                  className=" w-[20%] h-8 cursor-pointer"
                  onClick={ () => removeFromPlaylist(song) }
                />
              </BootstrapTooltip>
            </div>
            <p className="truncate pr-6 2xl:pr-12 text-white text-sm">{song.songname}</p>
            </div>
            )

      }
          </div>
        )
      }