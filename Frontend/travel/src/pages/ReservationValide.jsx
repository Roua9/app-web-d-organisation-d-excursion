import React from "react"
import { Link } from "react-router-dom"
import { Button, Col, Container, Row } from "reactstrap"
import "./../styles/reservation-valide.css"
const ReservationValide = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="pt-5 text-center">
            <div className="thank-you">
              <span>
                <i class="ri-check-double-line"></i>
              </span>
              <h1 className="mb-4 fw-semibold">
                {" "}
                Réservation effectuée avec succès
              </h1>

              <Button className="btn primary__btn w-25 retour">
                <Link to="/home">Reour à la page d'accueil </Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ReservationValide
