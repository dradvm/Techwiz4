import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { createContext, useState, useEffect } from 'react';
const cartContext = createContext();
function App() {
  const [cart, setCart] = useState([]);
  const [forceUpdate, setForceUpdate] = useState(0);
  return (
    <cartContext.Provider value={{cart, setCart, setForceUpdate}}>
      <div className="App">
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </cartContext.Provider>
  );
}
export default App;
export {cartContext};
