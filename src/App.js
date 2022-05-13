import { useRef } from "react";

import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";

import { usePage } from "./hooks/usePage";

import "./App.css";

function App() {
  const [page, setPage] = usePage();

  const startRef = useRef(0);
  const endRef = useRef(0);

  const reset = () => {
    startRef.current = 0;
    endRef.current = 0;
  };

  const changeSlide = (start, end) => {
    if (!end) {
      return;
    }

    if (start - end > 50) {
      if (page < 2) {
        setPage(page + 1);
      }
    }

    if (start - end < -50) {
      if (page > 0) {
        setPage(page - 1);
      }
    }

    reset();
  };

  function handleTouchStart(e) {
    startRef.current = e.targetTouches[0].clientX;
  }

  function handleTouchMove(e) {
    endRef.current = e.targetTouches[0].clientX;
  }

  function handleTouchEnd() {
    changeSlide(startRef.current, endRef.current);
  }

  function handleMouseDown(e) {
    startRef.current = e.clientX;
  }

  function handleMouseUp(e) {
    const end = e.clientX;
    changeSlide(startRef.current, end);
  }

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className="app"
    >
      <div
        style={{ transform: `translateX(calc(${page} * -100vw))` }}
        className="app__container"
      >
        <PageOne />
        <PageTwo />
        <PageThree />
      </div>
    </div>
  );
}

export default App;
