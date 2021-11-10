import React, { useEffect, useState } from "react";
import SliderContent1 from "./SliderContent1";
import Dots from "./Dots";
import Arrows from "./Arrows";
import SliderImage from "./SliderImage";
import "./slider.css";
import SliderContent2 from "./SliderContent2";
import SliderImage2 from "./SliderImage2";
import Video from "./Video";
import SliderVideo from "./SliderVideo"

const len = SliderImage.length - 1;

function Slider(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    
    useEffect(() => {
          const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
    }, [activeIndex]);
       
    

    if (props.val === "1") {
      
    return (
     <div className="slider-container">
      <SliderContent1 activeIndex={activeIndex} sliderImage={SliderImage} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        sliderImage={SliderImage}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
    } else if (props.val === "2") {
        return (
          <div className="slider-container">
           <SliderContent2 activeIndex={activeIndex} sliderImage={SliderImage2} />
           <Arrows
             prevSlide={() =>
            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
           }
          nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        sliderImage={SliderImage2}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
   );
    }
        
    else if (props.val === "3") {
         clearInterval()
        return (
          <div className="slider-container">
           <Video activeIndex={activeIndex} sliderImage={SliderVideo} />
           <Arrows
             prevSlide={() =>
            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
           }
          nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        sliderImage={SliderVideo}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
   );
    }
   
 
}

export default Slider;