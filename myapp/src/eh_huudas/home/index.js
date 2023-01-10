import "../../App.css";
import { useSyncExternalStore } from "react";
import Nav from "../../components/header/nav/index";
import Header from "../../components/header";
import Main from "../../components/main";
import Footer from "../../components/footer";
import { useState } from "react";

function Home() {
  const handleChange = (category) => {
    // alert("asd");
    console.log(`menu ${category}`);
  };

  return (
    <div className="App">
      <Nav handleChange={handleChange} />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
