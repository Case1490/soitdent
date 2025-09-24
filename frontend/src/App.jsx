// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./pages/Home";
import Footer from "./sections/Footer";

// Intranet
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/intranet/Dashboard";
import Patients from "./pages/intranet/Patients";
import Quotes from "./pages/intranet/Quotes";
import Dentists from "./pages/intranet/Dentists";
import Treatments from "./pages/intranet/Treatments";
import Reports from "./pages/intranet/Reports";

function App() {
  return (
    <Router>
      {/* Parte pública */}
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Parte privada: Intranet */}
        <Route path="/intranet" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="pacientes" element={<Patients />} />
          <Route path="citas" element={<Quotes />} />
          <Route path="odontologos" element={<Dentists />} />
          <Route path="tratamientos" element={<Treatments />} />
          <Route path="reportes" element={<Reports />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
