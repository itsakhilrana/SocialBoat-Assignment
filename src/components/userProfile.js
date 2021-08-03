import React from 'react'
import Yoga from '../assets/girlYoga.png'
import Fb from '../assets/facebook.png'
import In from '../assets/instagram.png'
import Yt from '../assets/youtube.png'

const UserProfile = () => {
    return (
        <div>
             {/* userProfile */}
        <div className="customGlassStyle p-5 h-auto">
          <img className="w-64 h-96 rounded-xl" src={Yoga} atl="Yoga"></img>
          <div className="customGlassAbout w-64 p-4 z-10 -mt-24">
            <div className="flex items-center space-x-2 mb-2">
              <img className="rounded-sm h-6 w-6" src={Yoga} alt="Yoga"></img>
              <p className="text-2xl font-semibold">Michelle</p>
            </div>
            <p className="text-xs font-semibold">
            Easy Deep Breathing Excercises for Beginners in Best way.
            </p>
            <p className="text-xs font-normal mt-2">
              #yoga #breathing #fitness #health
            </p>
            <div className=" flex mt-4 justify-between">
              <div className="customNeu w-24 h-8 text-red-500 font-bold  rounded-sm justify-center flex items-center">
                <p>Join Live</p>
              </div>
              <ul className="flex justify-end items-end">
                <li>
                  <img className="w-6 h-6 mx-1" src={Fb} alt="facebook"></img>
                </li>
                <li>
                  <img className="w-6 h-6 mx-1" src={In} alt="instagram"></img>
                </li>
                <li>
                  <img className="w-6 h-6 mx-1" src={Yt} alt="youtube"></img>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
    )
}

export default UserProfile
