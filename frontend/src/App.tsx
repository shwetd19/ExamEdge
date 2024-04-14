import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/AdminDash";
import NavBar from "./components/NavBar";
import Quizes from "./components/pages/StudentDash";
import StudentQuiz from "./components/pages/StudentQuiz";

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
        <Route
          path="/StudentQuiz"
          element={
            <div className="justify-center items-center w-full">
              <NavBar/>
              <StudentQuiz/>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
