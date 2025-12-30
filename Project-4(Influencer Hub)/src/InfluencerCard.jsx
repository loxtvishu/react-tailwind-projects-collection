import React from 'react'
import Gallery from './Gallery'
import ActionBar from './ActionBar'
import UserInfo from './UserInfo'
import StateFooter from './StateFooter'

const InfluencerCard = (props) => {
  return (
    <div className='h-[500px] w-[370px] bg-white rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 duration-300 transition-all cursor-pointer  '>
      <Gallery gallery ={props.gallery} />
      <ActionBar profileImg = {props.profileImg}/>
      <UserInfo username = {props.username} fullName = {props.fullName} bio ={props.bio} />
      <StateFooter Media = {props.stats.media} followers = {props.stats.followers} following = {props.stats.following} />
    </div>
  )
}

export default InfluencerCard