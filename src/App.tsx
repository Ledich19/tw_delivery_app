import { Routes, Route, Navigate } from 'react-router-dom';
import ErrorPage from './pages/Page404/Page404';
import Layout from './pages/Layout/Layout';
import Shop from './pages/Shop/Shop';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import ShopSpice from './components/ShopSpice/ShopSpice';

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Layout />}>
        <Route index element={<ShoppingCart />} />
        <Route path="shop" element={<Shop />}>
          <Route index element={<ShopSpice />} />
          <Route path=":id" element={<ShopSpice />} />
        </Route>
        <Route path="cart" element={<ShoppingCart />} />
        <Route path="404" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="404" />} />
      </Route>
    </Routes>
  );
};

export default App;
