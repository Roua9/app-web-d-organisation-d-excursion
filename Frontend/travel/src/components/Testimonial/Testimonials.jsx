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
          La réussite de ce voyage revient tout d'abord à l'organisation sans
          faille de Voyageurs en Tunisie (conseil dans la préparation,
          déroulement du voyage), mais aussi à un pays riche tant par ses sites
          historiques que par sa diversité naturelle .
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={pers01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3"> Marwa</h6>
            <p> 27/03/2023</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Histoire, culture, religion, les trois se mélangent constamment dans
          ce pays qui a beaucoup à dire et que la gentillesse de ses habitants
          nous fait constamment apprécier. Quel plaisir de concocter soi même
          son voyage en sachant que l'organisation et les problèmes s'il y en a.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={pers02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3"> Mohamed</h6>
            <p> 11/05/2022</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Vacation time nous a organisé un voyage de rêve en très peu de temps
          et couvrant 3 pays d'Asie du Sud Est. Excellent service et accueil.
          Service correspondant parfaitement à nos attentes, même au delà. Un
          gros merci à notre organisatrice à Paris et à l'équipe de conciergerie
          sur place. Je recommande fortement !
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={pers03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3"> Roua </h6>
            <p> 03/07/2022</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Première expérience avec Vacation time : conseil et accompagnement,
          lors de la préparation du voyage en Tabarka, sur place de très bonne
          qualité. Nous avons également apprécié l’échange au retour de notre
          voyage.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={pers04} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3"> wissal </h6>
            <p> 14/08/2022</p>
          </div>
        </div>
      </div>
    </Slider>
  )
}

export default Testimonials
