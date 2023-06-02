import "react-multi-carousel/lib/styles.css";
import MultiCarousel from "./MultiCarousel";
import React, { useEffect, useMemo, useState } from "react";
import { UserContext } from '../../../App';
import { useContext } from 'react'
import { Search } from "../../../assets";


const Dashboard = () => {

  const songArr = useContext(UserContext);
  console.log(songArr);
  const [searchText, setSearchText] = useState("")
  const [searched, setSearched] = useState([])
  let search = []
  let searchedSong = []
  let songName = songArr?.map((song) =>
    ({ Name: song?.name.toLowerCase() })
  )

  const changeHandler = (e) => {
    setSearchText(e.target.value)
    songName.forEach((song) => {
      if (song?.Name?.includes(e.target.value)) {
        search.push(songArr?.filter((item) => item?.name.toLowerCase() === song?.Name.toLowerCase()))
      }
      setSearched(search)
    })
  }

  searched?.forEach((song) => {
    return searchedSong.push(song[0])
  })

  return (
    <div className="">
      <div className="p-4 overflow-hidden">
        <div className="flex items-center justify-center">
          <div className="flex w-[45%] bg-white p-[0.60rem] rounded-3xl">
          <img src={Search} alt="search" className="pr-2" />
            <input
              type="text"
              placeholder="Search"
              aria-label="Search"
              // value={props.searchText}
              onChange={changeHandler}
              className="w-full text-base outline-none text-gray-700 "
            />
          </div>
        </div>

        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}

        {!searchText ? <MultiCarousel colors={songArr} /> : <MultiCarousel colors={searchedSong} />}
        {searchedSong.length === 0 && <p>Song Not Found!</p>}


      </div>

    </div>
  );
};

export default Dashboard;

