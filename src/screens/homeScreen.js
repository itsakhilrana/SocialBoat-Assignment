import React from 'react'
import AboutWeb from '../components/aboutWeb'
import UserProfile from '../components/userProfile'
import DragNdrop from '../components/dragNdrop'

import SbLogo from '../assets/socialboatlogo.svg'
const HomeScreen = () => {
  return (
    <>
      <div className="flex space-x-2 items-center mb-4">
        <img className="w-12 h-12" src={SbLogo} alt="logo"></img>
        <p className="font-bold text-3xl text-gray-50">SocialBoat</p>
      </div>
      <div className="sm: flex md:flex flex-wrap space-y-10 md:space-y-0 md:space-x-4 justify-center items-center">
        <AboutWeb />
        <UserProfile />
        <DragNdrop />
      </div>
    </>
  )
}

export default HomeScreen
