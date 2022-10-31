import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import CreatePatient from "./pages/CreatePatient";
import CreateDoctor from "./pages/CreateDoctor";
import MainPage from "./pages/MainPage";
import PagDoctor from "./pages/PagDoctor";
import PagPatient from "./pages/PagPatient";
import PagLogin from "./pages/PagLogin";
import PagRegister from "./pages/PagRegister";
import PagProfile from "./pages/PagProfile";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<PagLogin />} />
        <Route path="/register" element={<PagRegister />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/patient"
          element={
            <ProtectedRoute>
              <PagPatient />
            </ProtectedRoute>
          }
        />
        <Route
          path="/doctor"
          element={
            <ProtectedRoute>
              <PagDoctor />
            </ProtectedRoute>
          }
        />
        <Route
          path="/patient/createNewPatient"
          element={
            <ProtectedRoute>
              <CreatePatient />
            </ProtectedRoute>
          }
        />
        <Route
          path="/doctor/createNewDoctor"
          element={
            <ProtectedRoute>
              <CreateDoctor />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
