import "./Styles/App.css";
import Clients from "./Pages/Clients";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Works from "./Pages/Works";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import WhatsappButton from "./Components/WhatsappButton";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  return (
    <div className="App-container">
      <Header />
      <Routes>
        <Route path={"/"} element={<HomeWithServices />} />
        <Route path={"/Services"} element={<Services />} />
        <Route path={"/Works"} element={<Works />} />
        <Route path={"/Clients"} element={<Clients />} />
        <Route path={"/Contact"} element={<Contact />} />
      </Routes>
      <WhatsappButton />
      <Footer />
    </div>
  );
}
function HomeWithServices() {
  const location = useLocation();

  if (location.pathname !== "/") {
    return null;
  }

  return (
    <>
      <Home />
      <Services />
      <Clients />
      <Contact />
    </>
  );
}

export default App;
