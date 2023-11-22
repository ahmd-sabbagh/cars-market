import { Link } from "react-router-dom";
import "./RouteNav.css";

function RouteNav({ oneText, oneTo, two }) {
  return (
    <div className="RoteNav">
      <Link to={oneTo}>{oneText}</Link>
      <span> / {two}</span>
    </div>
  );
}

export default RouteNav;
