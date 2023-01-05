import "../../App.css";
import Main from "./main/index";
import Header from "../Blog_post/header/index";
import Nav from "../../components/header/nav/index";
import Footer from "../../components/footer";

function Home() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
