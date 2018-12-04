import Map from "../components/Map";
import Circle from "../components/Circle";
import Marker from "../components/Marker";
import MarkerWithCircle from "../components/MarkerWithCircle";

const routes = [
  {
    path: "/",
    component: Map
  },
  {
    path: "/circle",
    component: Circle
  },
  {
    path: "/marker",
    component: Marker
  },
  {
    path: "/marker_with_cirlce",
    component: MarkerWithCircle
  }
];

export default routes;
