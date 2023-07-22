import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Services from "./Pages/Services/Services";
import Process from "./Pages/Process/Process";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./component/Footer/Footer";
import ScrollProgressBar from "./component/ScrollProgessBar/ScrollProgessBar";
// import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="services" element={<Services />} />
        <Route path="process" element={<Process />} />
        {/* <Route path="contact" element={<Contact />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollProgressBar />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
