import React from 'react'
import VideoPlayer from "react-video-js-player"
import Medical from "./videos/Medical_Animation.mp4";
import './video.css'
function Video() {
    const videoSrc = Medical;
    return (
        <div>
            <VideoPlayer src={videoSrc} width="1240px" height="450" />
        </div>
    )
}

export default Video
