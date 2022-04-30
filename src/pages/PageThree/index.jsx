import { useState } from "react";

import Header from "../../components/Header";
import Button from "../../components/Button";
import Popup from "./Popup";

import "./index.css";
import "./bottle.css";

const PageThree = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="page page_three">
      <div className="page__container column">
        <Header />
        <div className="content">
          <div className="title">
            <div className="title__sup">ключевое сообщение</div>
            <div className="title__main">
              brend<b>xy</b>
            </div>
          </div>

          <div className="columns">
            <div className="note note_1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <div className="plate-icon" />
            </div>
            <div>
              <div className="note note_2">
                A arcu curcus vitae
                <div className="calendar-icon" />
              </div>
              <Button
                onClick={() => setOpen(true)}
                label="Подробнее"
                icon={<div className="plus-icon" />}
              />
            </div>
          </div>
        </div>

        <div className="logo" />

        <div className="bottle-container">
          <div className="bottle" />
          <div className="bubble-1" />
          <div className="bubble-2" />
          <div className="bubble-3" />
          <div className="bubble-4" />
          <div className="bubble-5" />
          <div className="bubble-6" />
          <div className="bubble-7" />
          <div className="bubble-8" />
        </div>
      </div>

      <Popup open={open} onClose={() => setOpen(false)} />
    </div>
  );
};
export default PageThree;
