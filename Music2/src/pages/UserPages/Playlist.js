import React from 'react'
import {UserContext} from '../../App';
import {useContext} from 'react'

export default function Playlist() {
  const user = useContext(UserContext);
  return (
    <div className="text-2xl text-white h-screen">
        This is 
    </div>
  )
}
