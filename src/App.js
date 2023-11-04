import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Home from './Home'
import Navbar from './component/Navbar';
import User from './User'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/user' element={<User />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
