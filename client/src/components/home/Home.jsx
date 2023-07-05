import React from 'react'
import classes from "./home.module.css";
import ProfileCard from "../profileCard/ProfileCard";
import SuggestedUsers from "../suggestedUsers/SuggestedUsers";
import Post from "../post/Post";
import RightSide from "../rightside/RightSide";

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <ProfileCard/>
        <SuggestedUsers/>
      </div>
      <Post/>
      <RightSide/>
      
    </div>
  )
}

export default Home;



