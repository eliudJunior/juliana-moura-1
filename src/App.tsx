import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Cabelo from './pages/Cabelo';
import Unhas from './pages/Unhas';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

function App() {
  return (
    <BrowserRouter basename="/juliana-moura-1/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cabelo" element={<Cabelo />} />
          <Route path="unhas" element={<Unhas />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="contato" element={<Contato />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
