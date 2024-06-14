import { PAGE_ROUTES } from "constants/routes";
import Home from "./pages/Home";

export const routes = [
  {
    path: PAGE_ROUTES.HOME,
    Component: Home,
    name: 'Home',
  },
];