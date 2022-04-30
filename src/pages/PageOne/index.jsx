import Header from "../../components/Header";
import Button from "../../components/Button";

import "./index.css";
import "./sperms.css";
import "./bacteria.css";

const PageOne = () => {
  return (
    <div className="page page_one">
      <div className="page__container column">
        <Header />

        <div className="title">
          <div className="title__sup">привет,</div>
          <span className="title__main">
            Это <b>не</b> коммерческое
            <div className="title__main__footer">
              задание
              <Button
                label="Что дальше?"
                icon={<div className="arrow-icon" />}
              />
            </div>
          </span>
        </div>

        <div className="logo" />

        <div className="bacterium-1" />
        <div className="bacterium-2" />
        <div className="bacterium-3" />
        <div className="bacterium-4" />
        <div className="bacterium-5" />
        <div className="bacterium-6" />
        <div className="bacterium-7" />

        <div className="sperm-1" />
        <div className="sperm-2" />
      </div>
    </div>
  );
};
export default PageOne;
