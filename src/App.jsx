import './App.css'
import { useRoutes } from 'react-router';
import BurgerMenuWrapper from './components/burgerMenu/BurgerMenuWrapper';
import Home from './pages/Home';
import Stays from './pages/Stays'
import Contact from './pages/Contact'
import StaysDetails from './pages/staysDetails/StayDetails';
import Activities from './pages/Activities';
import { ToastContainer } from 'react-toastify';
import Footer from './components/footer/Footer';
import MyList from './pages/MyList';

// Parent komponent
function App() {

const routes = useRoutes([
  { path: "/", element: <Home /> },
  { path: "/stays", element: <Stays /> },
  { path: "/stays/:id", element: <StaysDetails /> },
  { path: "/contact", element: <Contact /> },
  { path: "/activities", element: <Activities /> },
  { path: "/mylist", element: <MyList /> }
]);

  return (
    <>
      <BurgerMenuWrapper />
      {routes}
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;

