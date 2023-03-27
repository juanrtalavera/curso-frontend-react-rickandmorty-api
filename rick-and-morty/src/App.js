import './App.css';
import { ApiProvider } from './context/context';
import Characters from './pages/Characters/Characters';
import Navbar from './navigation/NavBar';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RequiredAuth from './components/RequiredAuth';
import { login } from './auth/auth'
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;
  const loginUser = ({email, password}) => 
  setUser(login({ email, password }));
  const logoutUser = () => setUser(null);

  return (
    <Router>
    <div>
    <Navbar authenticated={authenticated} logoutUser={logoutUser}></Navbar>
    {authenticated ? <p className='user-display'>You're logged in as <b>{user.username}</b></p> : <p className='user-display'></p>}
    <ApiProvider>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/characters' element={<RequiredAuth authenticated={authenticated}><Characters></Characters></RequiredAuth>}></Route>
      <Route path='/login' element={<Login loginUser={loginUser}></Login>}></Route>
    </Routes>
    </ApiProvider>
    </div>
    </Router>
  );
}

export default App;