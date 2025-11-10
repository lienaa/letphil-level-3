import './Nav.css'

export const Nav = ({ children }) => {
  return (
    <nav className="navbar-styles">
      {children}
    </nav>
  );
};

export const SubNav = ({ children }) => {
  return (
    <div className="subnav">
      {children}
    </div>
  );
};