import { AppProvider } from "./components/AppProvider";
import { Routes, Route } from "react-router-dom";
import AppPage from "./pages/app";

const App = () => {
  return (
    <AppProvider>
      <Routes>
        <Route path="/dashboard" element={<AppPage />} />
        <Route path="*" element={<AppPage />} />
      </Routes>
    </AppProvider>
  );
};

export default App;
