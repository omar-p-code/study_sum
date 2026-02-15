import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { useEffect } from "react";
import study_sum from "./store";
import type { StudySum } from "./constants";


function App() {
  const { dark } = study_sum() as StudySum;
  useEffect(() => {
    document.documentElement.classList.add(dark ? 'dark' : 'light')
  })
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
