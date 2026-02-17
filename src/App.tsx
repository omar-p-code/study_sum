import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { useEffect } from "react";
import study_sum from "./store";
import type { StudySum } from "./constants";
import Study from "./components/Study";


function App() {
  const { dark } = study_sum() as StudySum;
  useEffect(() => {
    document.documentElement.classList.add(dark ? 'dark' : 'light')
  })
  return (
    <main>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/study' element={<Study />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
