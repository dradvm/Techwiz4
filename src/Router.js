import { createBrowserRouter } from 'react-router-dom';
import App from "./App.js"
import Home from './pages/Home/Home';
import GlobalStyles from './components/GlobalStyles/GlobalStyles.js';
import ContactUs from './pages/ContactUs/ContactUs.js';
import ShopCatalog from './pages/ShopCatalog/ShopCatalog.js';
const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalStyles>
      <App/>
    </GlobalStyles>,
    children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/shop",
          element: <ShopCatalog/>
        },
        {
          path: "/contact",
          element: <ContactUs/>
        }
    ]
  }
]);

export default router