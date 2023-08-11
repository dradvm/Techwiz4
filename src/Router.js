import { createBrowserRouter } from 'react-router-dom';
import App from "./App.js"
import Home from './pages/Home/Home';
import GlobalStyles from './components/GlobalStyles/GlobalStyles.js';
import ContactUs from './pages/ContactUs/ContactUs.js';
import ShopCatalog from './pages/ShopCatalog/ShopCatalog.js';
import Feedback from './pages/Feedback/Feedback.js';
import PlantInformation from './pages/PlantInformation/PlantInformation.js';
import ShoppingCartPage from './pages/ShoppingCartPage/ShoppingCartPage.js';
import SearchPage from './pages/SearchPage/SearchPage.js';
import Checkout from './pages/Checkout/Checkout.js';
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
          path: "/shop/:plantName",
          element: <PlantInformation/>
        },
        {
          path: "/contact",
          element: <ContactUs/>
        },
        {
          path: "/feedback",
          element: <Feedback/>
        },
        {
          path: "/shopping-cart",
          element: <ShoppingCartPage/>
        },
        {
          path: "/search",
          element: <SearchPage/>
        },
        {
          path: "/checkout",
          element: <Checkout/>
        }
    ]
  }
]);

export default router