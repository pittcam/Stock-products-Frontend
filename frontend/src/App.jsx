import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Catalogo from './pages/Catalogo';
import Carrito from './pages/Carrito';
import Pago from './pages/Pago';
import HistorialVentas from './pages/HistorialVentas';

function App() {
  return (
    <div className="p-4">
      <nav className="flex gap-4 mb-4">
        <Link to="/">Catálogo</Link>
        <Link to="/carrito">Carrito</Link>
        <Link to="/pago">Pago</Link>
        <Link to="/historial">Historial</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Catalogo />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/pago" element={<Pago />} />
        <Route path="/historial" element={<HistorialVentas />} />
      </Routes>
    </div>
  );
}


