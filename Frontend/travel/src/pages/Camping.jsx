import React, { useState, useEffect } from "react"
import "./../styles/camp.css"

import CommonSection from "../components/section/CommonSection"

import SearchBar from "./../shared/SearchBar"
import Newsletter from "./../shared/Newsletter"
import CampCard from "./../shared/CampCard"

import { Container, Row, Col } from "reactstrap"

import useFetch from "../hooks/useFetch"
import { BASE_URL } from "../utils/config"
const Camping = () => {
  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)

  const {
    data: camp,
    loading,
    error,
  } = useFetch(`${BASE_URL}/camps/getAllCamp?page=${page}`)

  const { data: campCount } = useFetch(`${BASE_URL}/camps/search/getCampCount`)

  useEffect(() => {
    const pages = Math.ceil(campCount / 4)
    setPageCount(pages)
    window.scrollTo(0, 0)
  }, [page, campCount, camp])

  return (
    <>
      <section className="common__section-camp">
        <CommonSection title={"Découvrir les meilleurs campings"} />
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
              {camp?.map((tour) => (
                <Col lg="3" className="mb-4" key={tour._id}>
                  <CampCard tour={tour} />
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

export default Camping
