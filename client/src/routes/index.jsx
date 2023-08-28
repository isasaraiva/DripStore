import { createBrowserRouter } from 'react-router-dom';
import UiView from '../pages/UiView';
import Home from '../pages/Home';
import { cardsInfo } from '../utils/cardsMock';
import ProductDetail from '../pages/ProductDetail';
import UiTest from '../pages/UiView';

import ProductCart from '../pages/ProductCart';

import Login from '../pages/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/produtos',
    element: <UiView />,
  },
  {
    path: '/categorias',
    element: <UiView />,
  },
  {
    path: '/meus-pedidos',
    element: <UiView />,
  },
  {
    path: `/produtos/:itemId`,
    element: <ProductDetail />,
  },
  {
    path: `/produtos/cart`,
    element: <ProductCart/>
  },

  {
    path: '/teste',
    element: <UiTest />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
