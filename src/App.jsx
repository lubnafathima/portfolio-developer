import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
