import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Footer from "./pages/layout/Footer"
import Navbar from "./pages/layout/Navbar"
import Team from "./pages/about/team/Team"
import Back from "./pages/about/Background/Back"
import Values from "./pages/about/value/Values"
import Mission from "./pages/about/mission/Mission"
import Design from "./pages/Project/Design/Design"
import Building from "./pages/Project/Building/Building"
import Contact from "./pages/contact/Contact"
import Details from "./pages/Project/Details"
import Service from './pages/service/Service';


function App() {
  return (
    <>
      <Router>
      <Navbar/>
         <Routes>
          <Route index element={<Home/>}/>
          <Route path="/about/background" element={<Back/>}/>
          <Route path="/about/values" element={<Values/>}/>
          <Route path="/about/mission" element={<Mission/>}/>
          <Route path="/about/team" element={<Team/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/project/design" element={<Design/>}/>
          <Route path="/project/building" element={<Building/>}/>
          <Route path="/project/details" element={<Details/>}/>
          <Route path="/contacts" element={<Contact/>}/>
         </Routes>  
      </Router>
      <Footer/>
    </>
  )
}

export default App
