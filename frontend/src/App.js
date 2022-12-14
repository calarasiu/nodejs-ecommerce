import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from 'react-bootstrap'
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";


function App() {
  return (
    <Router>
       
      <Header/>
      <main className="py-3">
        <Container>
          <Routes>
            <Route path='/' element = {<HomeScreen />} exact/>
            <Route path='api/products/:id' element = {<ProductScreen/>} />
            <Route path="/cart">
              <Route path=":id" element={<CartScreen />} />
              <Route path="" element={<CartScreen />} />
            </Route>
          </Routes>
        </Container>
      </main>
      <Footer/>
      
    </Router>
   
  );
}

export default App;
