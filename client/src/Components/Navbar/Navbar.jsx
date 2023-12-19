import "./Navbar.css"; // Importa un archivo de estilos CSS para la barra de navegación

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">Inicio</li>
        <li className="nav-item">Acerca de</li>
        <li className="nav-item">Servicios</li>
        <li className="nav-item">Contacto</li>
      </ul>
    </nav>
  );
}

export default Navbar;
