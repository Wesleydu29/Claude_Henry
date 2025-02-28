
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KeepAlive from "./components/KeepAlive";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import APropos from "./pages/APropos";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Avis from "./pages/Avis";
import { ReactGAImplementation } from "react-ga4";
import { useLocation } from 'react-router-dom';

ReactGAImplementation.initialize('G-67D73E3BXG');

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGAImplementation.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return (
    <Router>
      <Header/>
      <KeepAlive/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Apropos' element={<APropos/>}/>
          <Route path='/Avis' element={<Avis/>}/>
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
