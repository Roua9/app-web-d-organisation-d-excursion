import React, { useState, useEffect } from "react"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import { sliderData } from "./Slider-data"
import "./slider.css"

const Slider = () => {
  const [currentSlide, setcurrentSlide] = useState(0)
  const slideLength = sliderData.length
  // slideLength = 1 2 3 4
  // cuurentSlide = 0 1 2 3

  const autoScroll = true
  let slideIntervall
  let intervalTime = 5000

  const nextSlide = () => {
    setcurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
  }

  const prevSlide = () => {
    setcurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
  }

  function auto() {
    slideIntervall = setInterval(nextSlide, intervalTime)
  }

  useEffect(() => {
    setcurrentSlide(0)
  }, [])

  useEffect(() => {
    if (autoScroll) {
      auto()
    }
    return () => clearInterval(slideIntervall)
  }, [currentSlide])

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />

      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <>
                <img src={slide.image} alt="slide" />
              </>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Slider
