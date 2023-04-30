import React from "react"
import { Card, CardBody } from "reactstrap"
import { Link } from "react-router-dom"
import "./materiel-card.css"

const MaterielCard = ({ tour }) => {
  const { _id, title, photo, price, desc, nom, tel } = tour

  return (
    <div className="materiel__card">
      <Card>
        <div className="materiel__img  d-flex align-items-center justify-content-between mt-2">
          <img src={photo} alt="materiel__img" />
        </div>
        <CardBody>
          <h3 className="materiel__title ">
            {/* <Link to={`/camping/${_id}`}>{title}</Link> */}

            {title}
          </h3>

          <div className="card__bottom-desc d-flex align-items-center justify-content-between mt-3">
            <h5> {desc} </h5>
          </div>

          <div className="card__bottom-desc d-flex align-items-center justify-content-between mt-3">
            <h6> {nom} </h6>
          </div>

          <div className="card__bottom-desc d-flex align-items-center justify-content-between mt-2">
            <h6> Tél : {tel} </h6>
          </div>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5> {price} DT</h5>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default MaterielCard
