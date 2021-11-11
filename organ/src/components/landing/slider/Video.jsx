import React from 'react'
import VideoPlayer from "react-video-js-player"

import './video.css'
function Video({activeIndex, sliderImage}) {
    
    return (
        <section>
            {sliderImage.map((slide, index) => (
               <div
          key={index}
          className={index === activeIndex ? "slidesVideo active_video" : "inactive_video"}
                >
                    <div>
            <VideoPlayer src={slide.videoSrc} width="1040" height="450" />
        </div>
          </div> 
            ))}
        </section>
        
    )
}

export default Video
