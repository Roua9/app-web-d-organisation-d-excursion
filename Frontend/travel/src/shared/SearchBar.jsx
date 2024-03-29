import React, { useRef } from "react"
import "./search-bar.css"
import { Col, Form, FormGroup } from "reactstrap"

import { BASE_URL } from "../utils/config"
import { useNavigate } from "react-router-dom"
const SearchBar = () => {
  const locationRef = useRef("")
  const distanceRef = useRef(0)
  const priceRef = useRef(0)
  const navigate = useNavigate()

  const searchHandler = async () => {
    const location = locationRef.current.value
    const distance = distanceRef.current.value
    const price = priceRef.current.value

    if (location === "" || distance === "" || price === "") {
      return alert("All field are required")
    }
    const res = await fetch(
      `${BASE_URL}/excursions/search/getExcursionBySearch?city=${location}&distance=${distance}&price=${price}`
    )

    if (!res.ok) alert("something went wrong")
    const result = await res.json()
    navigate(`/search?city=${location}&distance=${distance}&price=${price}`, {
      state: result.data,
    })
  }

  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              {" "}
              <i class="ri-map-pin-2-fill"></i>
            </span>
            <div>
              <h6> Location</h6>
              <input
                type="text"
                placeholder="Where are you going ?"
                ref={locationRef}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              {" "}
              <i class="ri-map-pin-time-fill"></i>
            </span>
            <div>
              <h6> Distance</h6>
              <input
                type="number"
                placeholder="Distance k/m"
                ref={distanceRef}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-last">
            <span>
              {" "}
              <i class="ri-group-fill"></i>{" "}
            </span>
            <div>
              <h6> Prix</h6>
              <input type="number" placeholder="0" ref={priceRef} />
            </div>
          </FormGroup>
          <span className="search__icon" type="submit" onClick={searchHandler}>
            <i class="ri-search-2-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  )
}

export default SearchBar
