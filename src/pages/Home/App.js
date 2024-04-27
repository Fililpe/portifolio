import { Menu } from "../../components/Menu";
import { Header } from "../../components/Header";
import { Sobre } from "../../components/Sobre";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Menu />
        <Header />
      </header>
      <body>
        <Sobre />
      </body>
    </div>
  );
}

export default App;
