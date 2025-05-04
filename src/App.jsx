import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginRegister from './LoginRegister';
import Inicio from './inicio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<LoginRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
