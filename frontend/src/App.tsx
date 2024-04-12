import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import NavBar from "./components/NavBar";
import Quizes from "./components/pages/Quizes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="justify-center items-center w-full">
              <NavBar/>
              <Dashboard />
            </div>
          }
        />
        <Route
          path="/quizes"
          element={
            <div className="justify-center items-center w-full">
              <NavBar/>
              <Quizes/>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
