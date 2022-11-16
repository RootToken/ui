import { AppProvider } from "./components/AppProvider";
import { Routes, Route } from "react-router-dom";
import AppPage from "./pages/app";
import DashboardPage from "./pages/dashboard";

const App = () => {
  return (
    <AppProvider>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<AppPage />} />
      </Routes>
    </AppProvider>
  );
};

export default App;
