import React from "react"
import "./newsletter.css"
import { Container, Row, Col } from "reactstrap"
import newsletter from "../assets/images/newsletter.png"

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={newsletter} alt="" />
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe now to get useful traveling information.</h2>
              <div className="newsletter__input">
                <input type="email" placeholder="Votre adresse mail" />
                <button className="btn newsletter__btn">S'inscrire</button>
              </div>
              <p>
                TravelTime, votre Agence de Voyage en Tunisie en Ligne vous
                propose des Promotions sur vos Voyages et Séjours en Tunisie
                avec les Meilleurs Prix et Services
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Newsletter
