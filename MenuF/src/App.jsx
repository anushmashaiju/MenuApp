import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuPage from './Pages/MenuPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuPage/>} />
      </Routes>
    </Router>
  );
};


export default App
