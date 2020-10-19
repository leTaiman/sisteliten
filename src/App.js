import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/home-page.js";
import Header from "./components/header.js";
import OverHeader from "./components/overheader.js";
import Footer from "./components/footer";

function App() {
  return (
    <React.Fragment>
      <OverHeader />
      <Header />
      <HomePage />

      <Footer />
    </React.Fragment>
  );
}

export default App;
