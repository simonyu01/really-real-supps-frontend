import { Link, useMatch, useResolvedPath } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="nav">
        <h1 className="nav-title">LOGO</h1>
        <ul>
          <li>
            <CustomLink to="/">Home</CustomLink>
          </li>
          <li>
            <CustomLink to="/products">Products</CustomLink>
          </li>
          <li>
            <CustomLink to="/about">About</CustomLink>
          </li>
          <li>
            <CustomLink to="/account">Account</CustomLink>
          </li>
          <li>
            <CustomLink to="/cart">Cart</CustomLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, 
    end: resolvedPath.pathname === "/" ? true : false });
  
  return (
    <Link
      to={to}
      {...props}
      className={isActive ? "nav-item nav-item-active" : "nav-item"}
    >
      {children}
    </Link>
  );
}

export default NavBar;
