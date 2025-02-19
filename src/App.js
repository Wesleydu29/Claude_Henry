
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KeepAlive from "./components/KeepAlive";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import APropos from "./pages/APropos";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Avis from "./pages/Avis";
function App() {
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
