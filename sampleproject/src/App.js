 
import './App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Register from './components/register';
import Home from './components/home';
import Login from './components/login'; 
import Header from './components/header';
import Dashboard from './components/dashboard';
import PrivateRoute from './privateroute';
import Viewfav from './components/viewfav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
         <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route exact path="/register" element={<Register/>}> </Route>
              <Route exact path="/login" element={<Login/>}> </Route>
              <Route exact path="/view" element={<Viewfav/>}> </Route>
              <Route exact path="/dashboard" element={
                                                      <PrivateRoute>
                                                             <Dashboard/>
                                                      </PrivateRoute>

                                                      }>
                                                        </Route>
              
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
