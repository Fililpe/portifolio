import "./styles.css";
import divider from "../../assets/imgs/wavesNegative.svg";
// import bgWaves from "../../assets/imgs/bg-waves.gif";
// import filipe from "../../assets/imgs/filipe-metade.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="bg-transparent">
          <nav className="nav-menu">
            <span>Luiz Filipe S. J. Silva</span>
            <ul>
              <li>Quem Sou Eu?</li>
              <li>Onde ja Trabalhei</li>
              <li>Opção3</li>
            </ul>
          </nav>
          <div className="text-container">
            <h1>Ola!</h1>
            <h2>Me chamo</h2>
            <h3>Luiz Filipe</h3>
          </div>
          <div className="container-center">
            {/* <img src={filipe} alt="filipe"></img> */}
            <span id="umPoucoMais">um pouco mais que um...</span>
            <span id="devWeb">Desenvolvedor Web</span>
            <span id="slogan">Contruindo mais um pedacinho de internet</span>
          </div>
        </div>
      </header>
    </>
  );
};

export { Header };
