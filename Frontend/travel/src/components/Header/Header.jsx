import React, { useRef, useEffect } from "react"
import { Container, Row, Button } from "reactstrap"
import { NavLink, Link } from "react-router-dom"
import logo from "../../assets/images/logo2.jpg"
import "./header.css"
const nav_links = [
  {
    path: "/home",
    display: "Accueil",
  },
  {
    path: "/excursion",
    display: "Excursion",
  },
  {
    path: "/hotel",
    display: "Hotel",
  },
  {
    path: "/camping",
    display: "Camping",
  },
]

const Header = () => {
  const headerRef = useRef(null)

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header")
      } else {
        headerRef.current.classList.remove("sticky__header")
      }
    })
  }
  useEffect(() => {
    stickyHeaderFunc()
    return window.removeEventListener("scroll", stickyHeaderFunc)
  })

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            {/***********logo **********/}
            <div className="logo">
              <img src={logo} alt="" />
            </div>

            {/***********menu start **********/}
            <div className="navigation">
              <ul className="=menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/***********menu end **********/}
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                <Button className="btn secondary__btn  conn">
                  <Link to="/login">Se connecter</Link>
                </Button>
                <Button className="btn primary__btn ">
                  <Link to="/register">S'inscrire</Link>
                </Button>
              </div>

              <span className="mobile_menu">
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header
