import { Routes, Route ,  useLocation } from "react-router-dom";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import ContactPage from "../pages/contact";
import OurUnits from "../pages/Ourunits";
import { AnimatePresence } from 'framer-motion';
import AppointmentPage from "../pages/Appointment";
import ChanReRICR from "../AboutUnits/ChanReRICR";
import ResearchAssist from "../AboutUnits/ResearchAssist";





export default function AppRoutes() {
   const location = useLocation();
  return (
    <AnimatePresence mode="wait">
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/our-units" element={<OurUnits />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/appointment" element={<AppointmentPage />} />
      <Route path="/chanre-ricr" element={<ChanReRICR />} />
      <Route path="/research-assist" element={<ResearchAssist />} />

    </Routes>
    </AnimatePresence>
  );
}