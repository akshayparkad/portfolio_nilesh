import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Frisska } from './components/Frisska/Frisska';
import { Home } from './components/Home/Home';
import Navbar from './components/Navigation/Navbar';
import { RightNXT } from './components/RightNXT/RightNXT';
import { Work } from './components/Work/Work';
import {IMGNRS} from './components/IMGNRS/IMGNRS';

function App() {
  return (
    <HashRouter>
    <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/rightNXT" exact element={<RightNXT />} />
        <Route path="/frisska" exact element={<Frisska />} />
        <Route path="/imgnrs" exact element={<IMGNRS />} />
        <Route path="/work" exact element={<Work />} />
      </Routes>
    <Footer />
    </HashRouter>

  );
}

export default App;
