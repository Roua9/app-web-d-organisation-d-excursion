import React from "react"
import ServiceCard from "./ServiceCard"
import { Col } from "reactstrap"
import WeatherImg from "../assets/images/weather.png"
import customizationImg from "../assets/images/customization.png"
import guideImg from "../assets/images/guide.png"
const servicesData = [
  {
    imgUrl: WeatherImg,
    title: "Calculate Weather",
    desc: "lore mlorem ",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "lore mlorem ",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "lore mlorem ",
  },
]

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  )
}

export default ServiceList
