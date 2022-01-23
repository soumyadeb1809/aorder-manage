import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Login /> }/>
        <Route path="/login" element={ <Login /> }/>
        <Route path="/dashboard" element={ 
          <StyledEngineProvider injectFirst>
            <Dashboard /> 
          </StyledEngineProvider>
        }/>
      </Routes>
    </div>
  );
}

export default App;
