import "./App.css";
//import FormPages from "./pages/FormPages/FormPages";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
//import PositionedSnackbar from "./components/snackbar/Snackbar";
import Navbar from "./components/Navbar";
//http://www.omdbapi.com/?apikey=c032e2d7

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Navbar />} />
        <Route path="/signup" element={<Navbar />} />
      </Routes>
    </div>
  );
};

export default App;
