import "./styles.css";
// import bgWaves from "../../assets/imgs/bg-waves.gif";
// import filipe from "../../assets/imgs/filipe-metade.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="bg-transparent">
          <div className="text-container">
            <span id="ola">Ola!</span>
            <span id="meChamo">Me chamo</span>
            <span id="luizFilipe">Luiz Filipe</span>
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
