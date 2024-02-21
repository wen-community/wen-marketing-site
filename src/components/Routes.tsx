import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as RouterRoutes,
} from "react-router-dom";
import { Home } from "../pages";

export default function Routes() {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </RouterRoutes>
    </BrowserRouter>
  );
}
