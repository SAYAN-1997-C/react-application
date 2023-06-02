import React from 'react'
import ReactAudioPlayer from "react-audio-player";
import { useLocation } from 'react-router-dom';


export default function PlaySong() {
    const location = useLocation();
    console.log(location);
    // console.log(previewURL);
    return (
        <div className='grid grid-cols-3 md:min-h-[81.7vh] w-full items-center justify-center'>
            <div></div>
            <div>
                <ReactAudioPlayer
                    className='bg-red-200 min-w-max'
                    src={location.state.previewURL}
                    preload
                    autoPlay
                    controls
                />
            </div>
            <div></div>
        </div>
    )
}

