import { Navigate, Route, Routes } from 'react-router-dom';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import { Navbar } from './components/Navbar';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserProvider';
import { AboutPage, HomePage, LoginPage } from './pages';
import { CartPage } from './pages/CartPage';

export const MainApp = () => {
  return (
    <CartProvider>
      <UserProvider>
        <h1>MainApp</h1>
        <Navbar />
        <hr />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/*' element={<Navigate to='/about' />} />
          <Route path='/pokemons' element={<MultipleCustomHooks />} />
        </Routes>
      </UserProvider>
    </CartProvider>
  );
};
