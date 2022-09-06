
// import './App.css';
// import { FaApple } from "react-icons/fa";
import { BrowserRouter,Routes, Route,} from "react-router-dom";
import Home from './pages/Home'
import Product from './pages/Product'
import Aboute from './pages/Aboute'
import Error from './pages/Error'
function App() {
  return (
<>

<BrowserRouter>
<Routes>
<Route index  path='/' element={<Home/>} />
<Route   path="/product"   element={<Product/>}/>
<Route   path="/aboute" element={<Aboute/>}/>
<Route path="*"  element={<Error/>}/>
</Routes>

</BrowserRouter>
</>



  );
}

export default App;
