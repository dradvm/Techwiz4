import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { createContext, useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router-dom';
const cartContext = createContext();
const responsiveContext = createContext();
function App() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [forceUpdate, setForceUpdate] = useState(0);
  const isMobileOrTablet = useMediaQuery({ maxWidth: "1023px"})
  const [isDesktop, setIsDesktop] = useState(useMediaQuery({ minWidth: "992px"}))
  const [isMobile, setIsMobile] = useState(useMediaQuery({ maxWidth: "768px"}))
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
      <responsiveContext.Provider value = {{isDesktop, isMobile, isMobileOrTablet}}>
        <div className="App bg-body-tertiary">
          <Header/>
          <Outlet/>
          <Footer/>
        </div>
      </responsiveContext.Provider>
    </cartContext.Provider>
  );
}
export default App;
export {cartContext, responsiveContext};
