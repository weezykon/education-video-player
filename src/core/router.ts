import { routes as homeRoutes } from "modules/home/routes";
import { routes as videoRoutes } from "modules/videos/routes";

export const routes = [
  ...homeRoutes,
  ...videoRoutes,
]