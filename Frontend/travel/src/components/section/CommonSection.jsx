import React from "react"

import { Container, Row, Col } from "reactstrap"
const CommonSection = ({ title }) => {
  return (
    <Container>
      <Row>
        <Col lg="12">
          <h1>{title}</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default CommonSection
