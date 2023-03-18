import React from "react"
import "../styles/home.css"
import { Container, Row, Col } from "reactstrap"
import Subtitle from "./../shared/Subtitle"
import SearchBar from "../shared/SearchBar"
import ServiceList from "../services/ServiceList"
import Slider from "../components/slider/Slider"
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList"

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
    </>
  )
}

export default Home
