import {BrowserRouter} from 'react-router-dom'
import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from './index';

import './App.css';
import AppRouter from './components/AppRouter';
import NavBar from './components/Navbar';
import Loader from './components/Loader';

function App() {

  const {auth} = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if(loading) {
    return (
      <Loader/>
    )
  }

  return (
    < BrowserRouter >
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App;
