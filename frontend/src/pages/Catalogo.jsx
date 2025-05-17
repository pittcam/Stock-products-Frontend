import { useEffect, useState } from "react";
import { obtenerProductos } from "../api/productos";
import { useCarrito } from "../context/CarritoContext";

export default function Catalogo() {
  const [productos, setProductos] = useState([]);
  const { agregarProducto } = useCarrito();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await obtenerProductos();
        setProductos(data);
      } catch (err) {
        console.error("Error al cargar productos:", err);
      }
    };

    fetchProductos();
  }, []);

  const handleAgregar = (producto) => {
    const cantidad = prompt(`¿Cuántas unidades de ${producto.nombre}?`);
    if (cantidad && !isNaN(cantidad)) {
      agregarProducto(producto, parseInt(cantidad));
      alert("Producto agregado al carrito ✔️");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Catálogo de Productos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {productos.map((p) => (
          <div key={p.id} className="border p-4 rounded shadow">
            <h3 className="font-semibold text-lg">{p.nombre}</h3>
            <p>Precio: ${p.precio}</p>
            <p>Stock: {p.stock}</p>
            <button
              onClick={() => handleAgregar(p)}
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
