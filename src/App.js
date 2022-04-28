import HomeIcon from "./assets/icons/HomeIcon.svg";
import Layer from "./assets/Layer 7.svg";
import onpointIcon from "./assets/icons/onpointIcon.svg";
import bakti_1 from "./assets/round-bacterias/bakti_1.svg";
import bakti_2 from "./assets/round-bacterias/bakti_2.svg";
import bakti_3 from "./assets/round-bacterias/bakti_3.svg";
import bakti_4 from "./assets/round-bacterias/bakti_4.svg";
import shadow_bakti from "./assets/round-bacterias/shadow_bakti.svg";
import pinkSperm1 from "./assets/pink-sperm/pink_sperm_1.svg";
import pinkSperm2 from "./assets/pink-sperm/pink_sperm_2.svg";
import ellipse from "./assets/buttons/ellipse.svg";
import array from "./assets/buttons/array.svg";
function App() {
  return (
    <div className="App">
      <div className="layout">
        <div className="header">
          <img className="home-icon" src={HomeIcon} width="22px" />
          <span>PROJECT</span>
        </div>
        <div className="text">
          <span className="text-hello">привет,</span>
          <div className="main-text">
            Это <span>не</span> коммерческое задание
            <button className="button">
              <div className="ellipse" />
              <img className="array" src={array} />
              Что дальше?
            </button>
          </div>
        </div>

        <img className="onpoint-icon" src={onpointIcon} width="60px" />
        <img className="bakti-1" src={bakti_1} />
        <img className="bakti-2" src={bakti_2} />
        <img className="bakti-3" src={bakti_3} />
        <img className="bakti-4" src={bakti_4} />
        <img className="shadow-bakti-1" src={shadow_bakti} />
        <img className="shadow-bakti-2" src={shadow_bakti} />
        <img className="pink-sperm1" src={pinkSperm1} />
        <img className="pink-sperm2" src={pinkSperm2} />
        <img className="chips" src={Layer} />
      </div>
    </div>
  );
}

export default App;
