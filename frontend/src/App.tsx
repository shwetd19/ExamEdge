import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/AdminDash";
import NavBar from "./components/NavBar";
import Quizes from "./components/pages/StudentDash";
import StudentQuiz from "./components/pages/StudentQuiz";
import Statistics from "./components/pages/Statistics";
import UpdateQuiz from "./components/pages/UpdateQuizCard";
import AddQuestions  from "./components/pages/AddQuestions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="justify-center items-center w-full">
              <NavBar />
              <Dashboard />
            </div>
          }
        />
        <Route
          path="/quizes"
          element={
            <div className="justify-center items-center w-full">
              <NavBar />
              <Quizes />
            </div>
          }
        />
        <Route
          path="/studentquiz"
          element={
            <div className="justify-center items-center w-full">
              <NavBar />
              <StudentQuiz />
            </div>
          }
        />
        <Route
          path="/statistics"
          element={
            <div className="justify-center items-center w-full">
              <NavBar />
              <Statistics />
            </div>
          }
        />
        <Route
          path="/updatequizcard"
          element={
            <div className="justify-center items-center w-full">
              <NavBar />
              <UpdateQuiz />
            </div>
          }
        />
        <Route
          path="/addquestions"
          element={
            <div className="justify-center items-center w-full">
              <NavBar />
              <AddQuestions  />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
