import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const cartContext = createContext();
function App() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [forceUpdate, setForceUpdate] = useState(0);
  useEffect(() =>
  {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [JSON.stringify(cart), forceUpdate]);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/")
  }, []);

  return (
    <cartContext.Provider value={{cart, setCart, setForceUpdate}}>
      <div className="App bg-body-tertiary">
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </cartContext.Provider>
  );
}
export default App;
export {cartContext};
