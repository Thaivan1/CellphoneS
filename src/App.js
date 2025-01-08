import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Header from "./components/home/Header";
import Login from "./pages/Login";
function App() {
  return (
    <div className='cellphone-container'>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
