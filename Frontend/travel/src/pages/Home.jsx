import React from "react"
import "../styles/home.css"
import { Container, Row, Col } from "reactstrap"
import Subtitle from "./../shared/Subtitle"
import SearchBar from "../shared/SearchBar"
import ServiceList from "../services/ServiceList"
import Slider from "../components/slider/Slider"
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList"
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
                  La vie est une aventure audacieuse ou
                  <span className="highlight"> rien</span>
                </h1>
                <p>
                  Remplissez vos yeux d'émerveillement, vivez comme si vous
                  tombiez mort en dix secondes. Voir le monde. C'est plus
                  fantastique que n'importe quel rêve fait ou payé dans les
                  usines.
                </p>
              </div>
            </Col>
            <Col lg="6">
              <div className="trip__img-box ">
                <Slider />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/***********featured tour section start****/}
      <Container>
        <Row>
          <Col lg="12" className="mb-5 service">
            <Subtitle subtitle={"Explore"} />
            <h2 className="featured__tour-title"> Our featured tours </h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>

      <Container>
        <Row>
          <Col lg="3" className="service">
            <div className="subService">
              <Subtitle subtitle={"Our services"} />
            </div>

            {/* <h2 className="services__title"> We offer our best services </h2> */}
          </Col>

          <ServiceList />
        </Row>
      </Container>

      {/**************Gallery ***********/}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="service">
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
            <Col lg="12" className="service">
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
