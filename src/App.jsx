import LoginPage from "./pages/login";
import { BrowserRouter} from "react-router-dom"
import { Routes, Route, Outlet, Link } from "react-router-dom";
import HomePage from "./pages/Home"
import DashboardPage from "./pages/Dashboard"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* deprotected */}
        <Route path="/login" element={<LoginPage />}></Route>
        {/* protected */}
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
