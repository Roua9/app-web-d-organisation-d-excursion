import React from "react"
import Slider from "react-slick"
import pers01 from "../../assets/images/pers01.jfif"
import pers02 from "../../assets/images/pers02.jfif"
import pers03 from "../../assets/images/pers03.jfif"
import pers04 from "../../assets/images/pers04.jfif"
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
          excepturi omnis eveniet deserunt quos velit sit minus qui inventore
          cumque repudiandae necessitatibu s, reiciendis iusto praesentium. Vero
          obcaecati maxime deleniti beatae.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={pers01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3"> Roua Slama</h6>
            <p> Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
          excepturi omnis eveniet deserunt quos velit sit minus qui inventore
          cumque repudiandae necessitatibu s, reiciendis iusto praesentium. Vero
          obcaecati maxime deleniti beatae.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={pers02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3"> Roua Slama</h6>
            <p> Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
          excepturi omnis eveniet deserunt quos velit sit minus qui inventore
          cumque repudiandae necessitatibu s, reiciendis iusto praesentium. Vero
          obcaecati maxime deleniti beatae.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={pers03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3"> Roua Slama</h6>
            <p> Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
          excepturi omnis eveniet deserunt quos velit sit minus qui inventore
          cumque repudiandae necessitatibu s, reiciendis iusto praesentium. Vero
          obcaecati maxime deleniti beatae.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={pers04} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3"> Roua Slama</h6>
            <p> Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  )
}

export default Testimonials
