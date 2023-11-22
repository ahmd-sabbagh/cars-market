import { useNavigate } from "react-router-dom";

function RouteReturn({ route }) {
  const navigate = useNavigate();
  return navigate(route);
}

export default RouteReturn;
