import LandingPage from './components/LandingPage.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExpenseItem from './components/ExpenseItem.js';
import Login from './components/auth/Login.js';
import Register from './components/auth/Register.js';
import Visuals from './components/Visuals.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/addExpense" element={<ExpenseItem />} />
        <Route exact path='/visuals' element={<Visuals />} />
      </Routes>
    </Router>
  );
}

export default App;
