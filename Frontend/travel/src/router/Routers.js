import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Camping from "../pages/Camping"
import Excursion from "../pages/Excursion"
import Home from "../pages/Home"
import Hotel from "../pages/Hotel"
import HotelDetails from "../pages/HotelDetails"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Reservation from "../pages/Reservation"
import SearchResultList from "../pages/SearchResultList"
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/hotel" element={<Hotel />} />
      <Route path="/excursion" element={<Excursion />} />
      <Route path="/camping" element={<Camping />} />
      <Route path="/hotels/:id" element={<HotelDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/search" element={<SearchResultList />} />
      <Route path="/reservation" element={<Reservation />} />
    </Routes>
  )
}

export default Routers
