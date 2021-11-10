import React from "react";

function SliderContent1({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
          >
              
              <div className="slide-content-grid">
                  <div className="slide-content-head">Real Stories</div>
                  <div className="slide-title">{slide.title}</div>
                  <div className="slide-text">{slide.description}</div>
              </div>
              <div>
                < img className="slide-image" src={slide.urls} alt="" />  
            </div>
           
          
        </div>
      ))}
    </section>
  );
}

export default SliderContent1;