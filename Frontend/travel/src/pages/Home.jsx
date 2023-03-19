import React from "react"
import "../styles/home.css"
import { Container, Row, Col } from "reactstrap"
import Subtitle from "./../shared/Subtitle"
import SearchBar from "../shared/SearchBar"
import ServiceList from "../services/ServiceList"
import Slider from "../components/slider/Slider"
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList"
import experienceImg from "./../assets/images/experience.jpg"
import MasonryImagesGallery from "../components/image-gallery/MasonryImagesGallery"
import Testimonials from "../components/Testimonial/Testimonials"
import Newsletter from "../shared/Newsletter"

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="trip__content">
                <div className="trip__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"know Before You Go"} />
                  {/* <img src={world} alt="" /> */}
                </div>
                <h1>
                  Traveling opens the door to creating{" "}
                  <span className="highlight"> memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                  molestiae illo. Exercitationem commodi totam magnam illo earum
                  nisi officia, ex modi dolore aliquid ad similique aut possimus
                  pariatur culpa. Voluptates!
                </p>
              </div>
            </Col>
            <Col lg="6">
              <div className="trip__img-box ">
                {/* <video src={video} alt="" controls /> */}
                <Slider />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <Container>
        <Row>
          <Col lg="3">
            <h5 className="services__subtitle"> What we serve</h5>
            <h2 className="services__title"> We offer our best services </h2>
          </Col>
          <ServiceList />
        </Row>
      </Container>
      {/***********featured tour section start****/}
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <Subtitle subtitle={"Explore"} />
            <h2 className="featured__tour-title"> Our featured tours </h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>

      {/**********experience ********  */}

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"}></Subtitle>

                <h2>
                  with our all experience <br /> we will serve you
                </h2>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Ullam et quod cupiditate minus, in praesentium architecto
                  veritatis fuga ex, expedita dicta modi repudiandae porro
                  rerum! Ad fugiat exercitationem expedita repellat!
                </p>
              </div>

              <div className="counter_wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span> 12k+</span>
                  <h6> Successfull Trip</h6>
                </div>
                <div className="counter__box">
                  <span> 2k+</span>
                  <h6> Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span> 15</span>
                  <h6>year experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/**************Gallery ***********/}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"}></Subtitle>
              <div className="gallery__title">
                Visit our customers tour gallery
              </div>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      {/**************fans */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"}></Subtitle>
              <div className="testimonial__title">
                What our fans say about us
              </div>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      <Newsletter />
    </>
  )
}

export default Home
