import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cardlist from "./components/cardList/index";
import Search from "./components/search";
import { datas } from "./data";
import { useState } from "react";

function App() {
  const [userList, setUserList] = useState(datas);
  const [searchValue, setSearchValue] = useState("");

  const changeText = (e) => {
    setSearchValue(e.target.value);
    const filteredUser = datas.filter((user) =>
      user.first.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setUserList(filteredUser);
  };

  return (
    <div className="App container">
      <h1 className="red">User List</h1>
      <Search searchValue={searchValue} handleChange={changeText} />
      <Cardlist users={userList} />
    </div>
  );
}

export default App;
