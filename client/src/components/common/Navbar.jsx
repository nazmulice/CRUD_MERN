import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <Link to="#" className="nav-link">
        CRUD
      </Link>
      <Link to="/" className="nav-link">
        List
      </Link>
      <Link to="/create" className="nav-link">
        Create Product
      </Link>
    </nav>
  );
};

export default Navbar;
