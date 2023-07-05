import React from 'react';
import classes from './post.module.css';
import profileUserImg from "../../assets/woman.jpg";
import * as HiIcons from "react-icons/hi";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";

const Post = () => {
  return (
    <div className={classes.container}>
    <div className={classes.wrapper}>
        <div className={classes.top}>
          <div className={classes.topLeft}>
          <img src={profileUserImg} className={classes.profileUserImg} alt=""/>
            <div className={classes.profileMetadata}>
                <span>WebDevMania</span>
                <span>3 hours ago</span>
            </div>
          </div>
          <HiIcons.HiOutlineDotsVertical size={25}/>
        </div>
        <div className={classes.center}>
          <div className={classes.desc}>
            My first post!
            <img src={profileUserImg} className={classes.postImg} alt=""/>
          </div>
        </div>
          <div className={classes.controls}>
            <div className={classes.controlsLeft}>
              <AiIcons.AiOutlineHeart/>
              <BiIcons.BiMessageRounded/>
            </div>
            <div className={classes.controlsRight}>
              <BsIcons.BsBookmark/>
            </div>
          </div>
          <div className={classes.comments}>
            <div className={classes.comment}>
              <div className={classes.commentLeft}>
                <img src={profileUserImg} className={classes.commentImg} alt=""/>
                <div className={classes.commentData}>
                <span>WebDevManis</span>
                <span className={classes.commentTimeago}>1 hour ago</span>
                </div>
              </div>
              <div className={classes.commentText}>
                Nice Post Jane!
              </div>
              <div className={classes.commentRight}>
            <AiIcons.AiOutlineHeart/>
            <span>5 Likes</span>
          </div>
            </div>

            <div className={classes.comment}>
              <div className={classes.commentLeft}>
                <img src={profileUserImg} className={classes.commentImg} alt=""/>
                <div className={classes.commentData}>
                <span>WebDevManis</span>
                <span className={classes.commentTimeago}>1 hour ago</span>
                </div>
              </div>
              <div className={classes.commentText}>
                Nice Post Jane!
              </div>
              <div className={classes.commentRight}>
            <AiIcons.AiOutlineHeart/>
            <span>5 Likes</span>
          </div>
            </div>

            <div className={classes.comment}>
              <div className={classes.commentLeft}>
                <img src={profileUserImg} className={classes.commentImg} alt=""/>
                <div className={classes.commentData}>
                <span>WebDevManis</span>
                <span className={classes.commentTimeago}>1 hour ago</span>
                </div>
              </div>
              <div className={classes.commentText}>
                Nice Post Jane!
              </div>
              <div className={classes.commentRight}>
            <AiIcons.AiOutlineHeart/>
            <span>5 Likes</span>
          </div>
            </div>

            <div className={classes.comment}>
              <div className={classes.commentLeft}>
                <img src={profileUserImg} className={classes.commentImg} alt=""/>
                <div className={classes.commentData}>
                <span>WebDevManis</span>
                <span className={classes.commentTimeago}>1 hour ago</span>
                </div>
              </div>
              <div className={classes.commentText}>
                Nice Post Jane!
              </div>
              <div className={classes.commentRight}>
            <AiIcons.AiOutlineHeart/>
            <span>5 Likes</span>
          </div>
            </div>
          </div>
          <div className={classes.postCommentSection}>
            <input type="text" className={classes.inputSection} placeholder="Type here ..."/>
            <button>Post</button>
          </div>
          


      </div>
    </div>
  )
}

export default Post;


