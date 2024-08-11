import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Realisations from "./pages/Realisations";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import './index.css';

import "./index.css"

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header/>
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/services" element={<Services/>}></Route>
            <Route path="/realisations" element={<Realisations/>}></Route>
            <Route path="/blog" element={<Blog/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/mentionslegales" element={<MentionsLegales/>}></Route>
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;