import React, { useState, useEffect } from "react"
import CommonSection from "../components/section/CommonSection"
import "./../styles/excursion.css"
import SearchBar from "./../shared/SearchBar"
import Newsletter from "./../shared/Newsletter"
import TourCard from "./../shared/TourCard"
import tourData from "./../assets/data/tours"
import { Container, Row, Col } from "reactstrap"

import useFetch from "../hooks/useFetch"
import { BASE_URL } from "../utils/config"
const Excursion = () => {
  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)

  const {
    data: excursion,
    loading,
    error,
  } = useFetch(`${BASE_URL}/excursions/getAllExcursion?page=${page}`)
  const { data: excursionCount } = useFetch(
    `${BASE_URL}/excursions/search/getExcursionCount`
  )

  useEffect(() => {
    const pages = Math.ceil(excursionCount / 4)
    setPageCount(pages)
    window.scrollTo(0, 0)
  }, [page, excursionCount, excursion])
  return (
    <>
      <section className="common__section-ex">
        <CommonSection title={"Découvrir nos excursions"} />
      </section>

      <section className="search">
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          {loading && <h4 className="text-center pt-5"> Loading .....</h4>}
          {error && <h4 className="text-center pt-5"> {error}</h4>}

          {!loading && !error && (
            <Row>
              {excursion?.map((tour) => (
                <Col lg="3" className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))}

              <Col lg="12">
                <div
                  className="pagination d-flex align-items-center
              justify-content-center mt-4 gap-3"
                >
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={page === number ? "active__page" : ""}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
        <Newsletter />
      </section>
    </>
  )
}

export default Excursion
