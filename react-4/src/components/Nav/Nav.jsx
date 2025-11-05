import './Nav.css'

export const Nav = ({ children }) => {
  return (
    <nav className="navbar-styles">
      {children}
    </nav>
  );
};
