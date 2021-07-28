import React from 'react';
import PersistentDrawerLeft from './components/Drawer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Teams } from './components/Teams';
import { TeamsDetails } from './components/TeamsDetail';

function App() {
  return (
    <BrowserRouter>
      <PersistentDrawerLeft/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/:TeamID' element={<TeamsDetails/>}></Route>
          <Route path='about' element={<About/>}></Route>
          <Route path='contact' element={<Contact/>}></Route>
          <Route path='teams' element={<Teams/>}></Route>
          <Route path='teams/:TeamID' element={<TeamsDetails/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
