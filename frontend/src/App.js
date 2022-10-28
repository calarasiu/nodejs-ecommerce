import React from "react";
import { Container } from 'react-bootstrap'
import Footer from "./Footer";
import Header from "./Header";


function App() {
  return (
    <>
      <Header/>
      <main>
        <Container>

          <h1>Welcome to Proshop</h1>
        </Container>
      </main>
      <Footer/>
      </>
  );
}

export default App;
