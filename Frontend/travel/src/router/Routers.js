import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Camping from "../pages/Camping"
import Excursion from "../pages/Excursion"
import ExcursionDetails from "../pages/ExcursionDetails"
import CampDetails from "../pages/CampDetails"
import Home from "../pages/Home"
import Hotel from "../pages/Hotel"
import HotelDetails from "../pages/HotelDetails"
import Login from "../pages/Login"
import Register from "../pages/Register"
import ReservationValide from "../pages/ReservationValide"
import SearchResultList from "../pages/SearchResultList"
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/hotel" element={<Hotel />} />
      <Route path="/excursion" element={<Excursion />} />
      <Route path="/camping" element={<Camping />} />
      <Route path="/camping/:id" element={<CampDetails />} />
      <Route path="/hotel/:id" element={<HotelDetails />} />
      <Route path="/excursion/:id" element={<ExcursionDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/search" element={<SearchResultList />} />
      <Route path="/reservationValide" element={<ReservationValide />} />
    </Routes>
  )
}

export default Routers
