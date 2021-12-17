import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Series from './pages/Series';
import Studies from  './pages/Studies';
import Patients from  './pages/Patients';
import Modalities from './pages/Modalities';
import MainNavigation from './components/layout/MainNavigation';


function App() {
  return (
    <div>
        <MainNavigation/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route exact path="/studies" element={<Studies />} />
          <Route exact path="/patients" element={<Patients />} />
          <Route exact path="/series" element={<Series />} />
          <Route exact path="/modalities" element={<Modalities />} />
        </Routes>
   
    </div>
  );
}

export default App;



