import React from "react"
import "./footer.css"
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap"
import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.jpg"
const quick_links = [
  {
    path: "/home",
    display: "Accueil",
  },
  {
    path: "/execursion",
    display: "Excursion",
  },
  {
    path: "/hotel",
    display: "Hotel",
  },
  {
    path: "/camping",
    display: "Camping",
  },
  {
    path: "/reservation",
    display: "Réservation",
  },
]

const quick_links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
]
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
                laborum, placeat accusantium, quisquam odio mollitia alias vel
                suscipit molestiae earum exercitationem qui commodi temporibus
                corporis modi sint nemo quae repellendus.
              </p>

              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                    <i class="ri-youtube-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i class="ri-facebook-circle-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i class="ri-instagram-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i class="ri-twitter-fill"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title"> Discover</h5>
            <ListGroup className="footer__quick-links">{}</ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
