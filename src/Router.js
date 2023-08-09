import { createBrowserRouter } from 'react-router-dom';
import App from "./App.js"
import Home from './pages/Home/Home';
import Checkout from './pages/Checkout/Checkout.js';
import GlobalStyles from './components/GlobalStyles/GlobalStyles.js';
import ContactUs from './pages/ContactUs/ContactUs.js';
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
          path: "/checkout",
          element: <Checkout/>
        },
        {
          path: "/contact",
          element: <ContactUs/>
        }
    ]
  }
]);

export default router