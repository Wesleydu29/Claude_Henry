
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import LearnMore from "./pages/LearnMore";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <Router>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/LearnMore' element={<LearnMore/>}/>
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
