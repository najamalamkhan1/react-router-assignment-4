import { Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Home from './Components/Home';
import Medicane from './Components/Medicane';
import Products from './Components/Products';
import Kitchen from './Components/Kitchen';
import Simplekitchen from './Simplekitchen';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {

  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='main' element={<Main />} />
        <Route path='products' element={<Products />}>
          <Route path='medicane' element={<Medicane />} />
          <Route path='kitchen' element={<Kitchen />} >
            <Route path='simplekitchen' element={<Simplekitchen />} />
          </Route>
        </Route>
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
