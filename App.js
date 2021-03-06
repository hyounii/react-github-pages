import './App.css';
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/cart">
            <Cart />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
