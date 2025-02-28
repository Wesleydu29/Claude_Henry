
import { Routes, Route, useLocation } from "react-router-dom";
import KeepAlive from "./components/KeepAlive";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import APropos from "./pages/APropos";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Avis from "./pages/Avis";
import { useEffect } from "react";
import  ReactGA  from "react-ga4";

ReactGA.initialize('G-67D73E3BXG');

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return (
    <>
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
    </>
  );
}

export default App;
