import React, { useRef, useEffect, useContext } from "react"
import { Container, Row, Button } from "reactstrap"
import { NavLink, Link, useNavigate } from "react-router-dom"
import logo from "../../assets/images/logo2.jpg"
import "./header.css"
import { AuthContext } from "../../context/AuthContext"
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
    /*
    path: "/camping",
    display: "Camping",
*/
  },
]

const Header = () => {
  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const navigate = useNavigate()
  const { user, dispatch } = useContext(AuthContext)

  const logout = () => {
    dispatch({ type: "LOGOUT" })
    navigate("/")
  }

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
  //const toggleMenu = () => menuRef.current.classList.toggle("show__menu")
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
            <div className="navigation" /*ref={menuRef} onClick={toggleMenu}*/>
              <ul className="=menu d-flex align-items-center gap-5  ">
                {nav_links.map((item, index) => (
                  <li className="nav_item " key={index}>
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

                <li class="nav-item dropdown" className="nav_item  ">
                  <a
                    className="camp "
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-expanded="false"
                  >
                    Camping
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="/camping">
                        Offres
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/materiel">
                        Matériel
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/***********menu end **********/}
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                {user ? (
                  <>
                    <h5 className="mb-0"> {user.username}</h5>
                    <Button className="btn btn-dark" onClick={logout}>
                      Déconnexion
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="btn secondary__btn  conn">
                      <Link to="/login">Se connecter</Link>
                    </Button>
                    <Button className="btn primary__btn ">
                      <Link to="/register">S'inscrire</Link>
                    </Button>
                  </>
                )}
              </div>
              {/* <span className="mobile__menu" onClick={toggleMenu}>*/}
              {/* <i className="ri-menu-line"></i>*/}
              {/*  </span> */}
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header
