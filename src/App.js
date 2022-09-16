import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage'
import RegPage from './pages/RegPage'
import GamePage from './pages/GamePage'
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="login" element={<LoginPage/>}></Route>
        <Route path="reg" element={<RegPage/>}></Route>
        <Route path="game" element={<GamePage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
