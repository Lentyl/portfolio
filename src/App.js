import React from "react";

import Header from "./components/Header";
import MainPage from "./components/MainPage";
import ContaktForm from "./components/Contakt";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Header />
      <MainPage />
      <ContaktForm />
      <Footer />
    </div>
  );
}

export default App;
