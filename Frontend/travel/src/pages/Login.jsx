import React, { useState } from "react"
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap"
import { Link } from "react-router-dom"
import "./../styles/login.css"
import userIcon from "./../assets/images/user.png"
import loginImg from "./../assets/images/loginImg.jpg"
const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  })

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleClick = (e) => {
    e.preventDefault()
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2> Se Connecter</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                  >
                    {" "}
                    Se connecter{" "}
                  </Button>
                </Form>
                <p>
                  Vous n'avez pas un compte ?
                  <Link to="/register">Créer le</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login
