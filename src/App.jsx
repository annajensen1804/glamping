import './App.css'
import { useRoutes } from 'react-router';
import Home from './pages/Home';
import Stays from './pages/Stays'
import BurgerMenu from './components/burgerMenu/BurgerMenu';

// Parent komponent
function App() {

const routes = useRoutes([
  { path: "/", element: <Home /> },
  { path: "/stays", element: <Stays /> },
]);

  return (
    <>
      <BurgerMenu />
      {routes}
    </>
  );
}

export default App;

