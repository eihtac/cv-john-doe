import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css"

const App = () => {
  return (
    <Router>
      <Header/>
      <Footer/>
    </Router>
  )
}

export default App;