import './App.css';
import { useSyncExternalStore } from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

function App() {
  let sum = 0;
  let avg = 0;
  const users = [
    {name: "john", age: 15, imageURL:`https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/John_Cena_July_2018.jpg/1200px-John_Cena_July_2018.jpg`},
    {name: "bron", age: 8, imageURL:`https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/John_Cena_July_2018.jpg/1200px-John_Cena_July_2018.jpg`},
    {name: "steph", age: 34, imageURL:`https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/John_Cena_July_2018.jpg/1200px-John_Cena_July_2018.jpg`},
    {name: "harden", age: 32, imageURL:`https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/John_Cena_July_2018.jpg/1200px-John_Cena_July_2018.jpg`},
    {name: "irving", age: 32, imageURL:`https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/John_Cena_July_2018.jpg/1200px-John_Cena_July_2018.jpg`},
  ];

  avg = sum/users.length

  

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
