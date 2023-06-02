// import React from 'react'
// import ReactAudioPlayer from "react-audio-player";
// import { useLocation } from 'react-router-dom';


// export default function PlaySong() {
//     const location = useLocation();
//     console.log(location);
//     // console.log(previewURL);
//     return (
//         <div className='grid grid-cols-3 md:min-h-[81.7vh] w-full items-center justify-center'>
//             <div></div>
//             <div>
//                 <ReactAudioPlayer
//                     className='bg-red-200 min-w-max'
//                     src={location.state.previewURL}
//                     preload
//                     autoPlay
//                     controls
//                 />
//             </div>
//             <div></div>
//         </div>
//     )
// }


import { useState, useRef } from 'react'
import Slider from '../../components/slider/Slider'
import ControlPanel from '../../components/controls/ControlPanel'
import { useLocation } from 'react-router-dom';
import {listening, speaker } from '../../assets'

function PlaySong() {
    const location = useLocation();
    const [percentage, setPercentage] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)

    const audioRef = useRef()

    const onChange = (e) => {
        const audio = audioRef.current
        audio.currentTime = (audio.duration / 100) * e.target.value
        setPercentage(e.target.value)
    }

    const play = () => {
        const audio = audioRef.current
        audio.volume = 1

        if (!isPlaying) {
            setIsPlaying(true)
            audio.play()
        }

        if (isPlaying) {
            setIsPlaying(false)
            audio.pause()
        }
    }

    const getCurrDuration = (e) => {
        const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
        const time = e.currentTarget.currentTime

        setPercentage(+percent)
        setCurrentTime(time.toFixed(2))
    }

    return (
        <div className='app-container'>
            
            <div className='grid md:grid-cols-3 gap-6 p-4 justify-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate'>
                <div></div>
                <div className='bg-white border border-lime-500 bg-opacity-25 shadow-2xl shadow-rose-500 p-4 rounded-2xl'>
                    <h1 className='text-center text-4xl font-extrabold absolute max-left-[43%] z-50'>Audio Player</h1>
                    <img src={speaker} className='p-5 w-[100%] anima'/>
                    <Slider percentage={percentage} onChange={onChange} />
                    <audio
                        ref={audioRef}
                        onTimeUpdate={getCurrDuration}
                        onLoadedData={(e) => {
                            setDuration(e.currentTarget.duration.toFixed(2))
                        }}
                        autoPlay
                        src={location.state.previewURL}
                    ></audio>
                    <ControlPanel
                        play={play}
                        isPlaying={isPlaying}
                        duration={duration}
                        currentTime={currentTime}
                    />
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default PlaySong;
