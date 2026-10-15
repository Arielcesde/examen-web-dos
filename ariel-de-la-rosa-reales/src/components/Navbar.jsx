import { Link, NavLink } from 'react-router-dom';

export function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-bar">
        <Link className="brand" to="/">
          <span className="brand-badge" aria-hidden="true">LA</span>
          <span>Librería Archivo</span>
        </Link>
        <nav aria-label="Navegación principal">
          <ul className="nav-links">
            <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Inicio</NavLink></li>
            <li><NavLink to="/catalogo" className={({ isActive }) => isActive ? 'active' : ''}>Catálogo</NavLink></li>
            <li><NavLink to="/contacto" className={({ isActive }) => isActive ? 'active' : ''}>Contacto</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}