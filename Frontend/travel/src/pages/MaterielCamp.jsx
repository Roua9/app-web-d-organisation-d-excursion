import React from "react"
import useFetch from "../hooks/useFetch"
import { BASE_URL } from "../utils/config"
import { Container, Row, Col, Button } from "reactstrap"
import Newsletter from "./../shared/Newsletter"
import CampCard from "./../shared/MaterielCard"
import "./../shared/materiel-card.css"
import { useNavigate } from "react-router-dom"

const MaterielCamp = () => {
  const navigate = useNavigate()

  const navigateToForm = () => {
    navigate("/ajoutMateriel")
  }
  const {
    data: materiel,
    loading,
    error,
  } = useFetch(`${BASE_URL}/materiels/getAllMateriel`)

  return (
    <>
      <section>
        <Button className=" w-20 mt-6 pub " onClick={navigateToForm}>
          Publier matériel de camping
        </Button>
      </section>
      <section className="pt-8">
        <Container>
          {loading && <h4 className="text-center pt-5"> Loading .....</h4>}
          {error && <h4 className="text-center pt-5"> {error}</h4>}

          {!loading && !error && (
            <Row>
              {materiel?.map((tour) => (
                <Col lg="3" className="mb-4" key={tour._id}>
                  <CampCard tour={tour} />
                </Col>
              ))}
            </Row>
          )}
        </Container>
        <Newsletter />
      </section>
    </>
  )
}

export default MaterielCamp
