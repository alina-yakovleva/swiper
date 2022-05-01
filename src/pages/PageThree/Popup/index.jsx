import { useState } from "react";

import "./index.css";

const data = [
  [
    {
      number: "01",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      number: "02",
      description: "Lorem ipsum dolor sit amet. ipsum dolor sit amet",
    },
    {
      number: "03",
      description: "Lorem ipsum dolor sit amet.",
    },
  ],
  [
    {
      number: "04",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      number: "05",
      description: "Lorem ipsum dolor sit amet. sit amet",
    },
    {
      number: "06",
      description: "Lorem ipsum dolor amet. sit amet",
    },
  ],
];

const Popup = ({ open, onClose }) => {
  const [index, setIndex] = useState(1);

  const changeIndex = (number) => {
    const result = index + number;

    if (result >= 0 && result < data.length) {
      setIndex(result);
    }
  };

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
          {data[index].map((item) => (
            <div className="list__item" key={item.number}>
              <div className="list__item__number">{item.number}</div>
              <div className="list__item__description">{item.description}</div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <div
            onClick={() => changeIndex(-1)}
            className="pagination-icon clickable"
          />
          {data.map((item, i) => (
            <div
              onClick={() => setIndex(i)}
              className={
                i === index
                  ? "pagination__bullet clickable pagination__bullet_active"
                  : "pagination__bullet clickable"
              }
            />
          ))}
          <div
            onClick={() => changeIndex(1)}
            className="pagination-icon pagination-icon_revert clickable"
          />
        </div>
      </div>
    </div>
  );
};

export default Popup;
