import { Routes, Route } from "react-router-dom";
import { WordCounter } from "../pages/WordCounter";
import { NoPage } from "../pages/NoPage";

import React from 'react'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<WordCounter />} />
        <Route path='*' element={<NoPage />} />
    </Routes>
  )
}
