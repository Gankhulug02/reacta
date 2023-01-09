import "../../App.css";
import { useSyncExternalStore } from "react";
import Header from "../../components/header";
import Main from "../../components/main";
import Footer from "../../components/footer";

function Home() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
