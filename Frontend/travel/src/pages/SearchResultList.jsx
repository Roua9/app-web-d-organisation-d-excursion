import React, { useState } from "react"
import CommonSection from "../components/section/CommonSection"
import { Container, Row, Col } from "reactstrap"
import { useLocation } from "react-router-dom"
import TourCard from "./../shared/TourCard"
import Newsletter from "./../shared/Newsletter"
const SearchResultList = () => {
  const location = useLocation()

  const [data] = useState(location.state)

  console.log(data)
  return (
    <>
      <section className="common__section-ex">
        <CommonSection title={"Résultat de recherche"} />
      </section>

      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <h4 className="text-center"> Aucun résultat</h4>
            ) : (
              data?.map((tour) => (
                <Col lg="3" className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
        <Newsletter />
      </section>
    </>
  )
}

export default SearchResultList
