import React, { useState, useContext } from "react"
import "./booking.css"
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { BASE_URL } from "../../utils/config"

const Booking = ({ tour, avgRating }) => {
  const { price, reviews, title } = tour

  const navigate = useNavigate()

  const { user } = useContext(AuthContext)
  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    fullName: "",
    phone: "",
    guestSize: "",
    bookAt: "",
  })
  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  //const serviceFee = 10
  const totalAmount = Number(price) * Number(booking.guestSize)
  //+ Number(serviceFee)

  const handleClick = async (e) => {
    e.preventDefault()

    console.log(booking)

    try {
      if (!user || user === "undefined" || user === null) {
        return alert("Please Sign In")
      }
      const res = await fetch(`${BASE_URL}/booking`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(booking),
      })
      const result = await res.json()

      if (!res.ok) {
        return alert(result.message)
      }
      navigate("/reservationValide")
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          {" "}
          {price} DTN <span>/par personne</span>
        </h3>

        <span className="tour__rating d-flex align-items-center ">
          <i className="ri-star-fill"> </i> {avgRating === 0 ? null : avgRating}{" "}
          ({reviews?.length})
        </span>
      </div>

      {/**************form */}

      <div className="booking__form">
        <h5> Informations</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Nom Complet"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Téléphone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup className="d-flex align-items-center">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Nbre de personne"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>

      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center">
              {" "}
              {price} DTN <i className="ri-close-line"></i> 1 peronne
            </h5>
            <span> {price} DTN</span>
          </ListGroupItem>
          {/* <ListGroupItem className="border-0 px-0">
            <h5>Service charge</h5>
            {/* <span> {serviceFee} DTN</span> */}
          {/* </ListGroupItem> */}
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>{totalAmount} DTN</span>
          </ListGroupItem>
        </ListGroup>

        <Button
          className="btn primary__btn w-100 mt-4 res"
          onClick={handleClick}
        >
          {" "}
          Réserver
        </Button>
      </div>
    </div>
  )
}

export default Booking
