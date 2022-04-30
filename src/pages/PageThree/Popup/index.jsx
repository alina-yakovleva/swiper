import "./index.css";

const Popup = ({ open, onClose }) => {
  if (!open) {
    return null;
  }

  return (
    <div className="backdrop">
      <div className="popup">
        <div onClick={onClose} className="close-icon clickable" />

        <div className="title">
          <div className="title__sup">Преимущества</div>
          <div className="title__main">
            brend<b>xy</b>
          </div>
        </div>

        <div className="list">
          <div className="list__item">
            <div className="list__item__number">01</div>
            <div className="list__item__description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </div>
          </div>

          <div className="list__item">
            <div className="list__item__number">02</div>
            <div className="list__item__description">
              Lorem ipsum dolor sit amet.
            </div>
          </div>

          <div className="list__item">
            <div className="list__item__number">03</div>
            <div className="list__item__description">
              Lorem ipsum dolor sit amet.
            </div>
          </div>
        </div>

        <div className="pagination">
          <div className="pagination-icon clickable" />
          <div className="pagination__bullet pagination__bullet_active clickable" />
          <div className="pagination__bullet clickable" />
          <div className="pagination-icon pagination-icon_revert clickable" />
        </div>
      </div>
    </div>
  );
};

export default Popup;
