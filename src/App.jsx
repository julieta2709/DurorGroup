import "./Styles/App.css";
import Clients from "./Pages/Clients";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Works from "./Pages/Works";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import WhatsappButton from "./Components/WhatsappButton";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/Services"} element={<Services />} />
          <Route path={"/Works"} element={<Works />} />
          <Route path={"/Clients"} element={<Clients />} />
          <Route path={"/Contact"} element={<Contact />} />
        </Routes>
        <WhatsappButton/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
