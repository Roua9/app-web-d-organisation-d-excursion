import React from "react"
import "./footer.css"
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap"
import { Link } from "react-router-dom"
import logo from "../../assets/images/logo2.jpg"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p> Vacation Time est la meilleure agence de voyage du monde.</p>

              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                    <i className="ri-youtube-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-facebook-circle-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-instagram-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-twitter-fill"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title">Informations utiles</h5>
            <p> Qui sommes-nous ?</p>
            <p> Nos Promos </p>
            <p> Notre agence vous répond</p>
          </Col>
          <Col lg="3" className="contact">
            <h5 className="footer__link-title">Contact</h5>
            <ListGroup className="footer__quick-links">
              <ListGroupItem
                className="ps-0 border-0 d-flex 
                align-items-center gap-3"
              >
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-range-line"></i>
                  </span>
                  Adresse :
                </h6>
                <p className="mb-0">Tunisie , Sousse</p>
              </ListGroupItem>

              <ListGroupItem
                className="ps-0 border-0 d-flex 
                align-items-center gap-3"
              >
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  Email :
                </h6>
                <p className="mb-0">rouaslama8gmail.com</p>
              </ListGroupItem>
              <ListGroupItem
                className="ps-0 border-0 d-flex 
                align-items-center gap-3"
              >
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  Téléphone :
                </h6>
                <p className="mb-0">58 986 597</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-paiement">Paiement sécurisé</h5>
            <div className="pay">
              <span>
                <i className="ri-visa-line"></i>
              </span>
              <span>
                <i className="ri-secure-payment-line"></i>
              </span>
              <span>
                <i className="ri-bank-card-fill"></i>
              </span>
              <span>
                <i className="ri-mastercard-fill"></i>
              </span>
            </div>

            <Row>
              <Col lg="6" className="footer__link-promos ">
                <h5 className="footer__link-promos ">Nos Promos</h5>
                <div className="promos ">
                  <p>Promo du mois</p>
                  <p>Last minute</p>
                  <p>Promos Ramadan</p>
                  <p>Promos Aid</p>
                  <p>Gratuités Enfants</p>
                </div>
              </Col>
            </Row>
          </Col>

          <Col lg="12" className="text-center pt-5">
            <p className="copyright">
              Copyright {year} , design and develop by Roua Slama . All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
