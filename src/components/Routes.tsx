import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as RouterRoutes,
} from "react-router-dom";
import { Home, Wns } from "./pages";
import { HOME_SLUG, WNS_SLUG } from "../constants";

export default function Routes() {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path={HOME_SLUG} element={<Home />} />
        <Route path={WNS_SLUG} element={<Wns />} />

        <Route path="*" element={<Navigate to="/" />} />
      </RouterRoutes>
    </BrowserRouter>
  );
}
