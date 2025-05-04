import React from "react";
import './Proyecto.css';  // Importa el archivo CSS del proyecto
import { useNavigate } from 'react-router-dom';

function Inicio() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aquí puedes agregar cualquier lógica adicional para cerrar sesión, como limpiar el localStorage o el estado global.
    
    // Luego rediriges a la página de login
    navigate('/login');
  };

  return (
    <div className="min-h-full">
      <nav className="color">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center"></div>
            <div className="flex-shrink-0">
              <a href="/"><img className="h-40 w-25" src="/Logos/PLANify with rocco.png" alt="PLANIFY" /></a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="rounded-md bg-green-600 px-3 py-2 text-sm text-black font-medium text-white">
                  Inicio
                </a>
                <a href="/proyectos" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-green-600 hover:text-white">
                  Proyectos
                </a>
                <a href="/calendario" className="rounded-md px-3 py-2 text-sm font-medium text-black-300 hover:bg-green-600 hover:text-white">
                  Calendario
                </a>
                <button 
                  onClick={handleLogout} 
                  className="rounded-md px-3 py-2 text-sm font-medium text-black-300 hover:bg-red-600 hover:text-white"
                >
                  Cerrar Sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <section id="dashboard" className="content-section">
            <div className="summary">
              <div className="card">
                <h2>Proyectos Activos</h2>
                <p id="total-proyectos">0 proyectos en curso</p>
              </div>
              <div className="card">
                <h2>Tareas Pendientes</h2>
                <p id="total-tareas">5 tareas sin completar</p>
              </div>
              <div className="card">
                <h2>Próximas Fechas Límite</h2>
                <p id="total-fechas-proximas">3 tareas con fechas próximas</p>
              </div>
            </div>
          </section>

          <section id="proyectos" className="content-section">
            <h2>Lista de Proyectos</h2>
            <table id="proyectos-lista">
              <thead>
                <tr>
                  <th>Nombre del Proyecto</th>
                  <th>Fecha de Inicio</th>
                  <th>Fecha de Vencimiento</th>
                  <th>Importancia</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {/* Los proyectos se agregarán aquí dinámicamente */}
              </tbody>
            </table>
            <button className="add-btn" onClick={() => window.location.href = 'proyectoss.html'}>
              Agregar Proyecto
            </button>
          </section>
        </div>
      </main>

      <footer>
        <p>&copy; PLANIFY - 2024 (EEMSJ)</p>
      </footer>
    </div>
  );
}

export default Inicio;