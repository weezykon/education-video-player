import { PAGE_ROUTES } from "constants/routes";
import Video from "./pages/Video";

export const routes = [
  {
    path: PAGE_ROUTES.VIDEO,
    Component: Video,
    name: 'Video',
  },
];