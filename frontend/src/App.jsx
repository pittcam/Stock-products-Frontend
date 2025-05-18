import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Catalogo from './pages/Catalogo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carrito from './pages/Carrito';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Pago from './pages/Pago';
import Principal from './pages/principal';

function App() {
  return (
     <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/pago" element={<Pago />} />
           
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;


