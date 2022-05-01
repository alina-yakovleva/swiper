import { useEffect, useRef, useState } from "react";

import Header from "../../components/Header";
import Layout from "../../components/Layout";

import { usePage } from "../../hooks/usePage";

import "./index.css";
import "./sperms.css";

const PageTwo = () => {
  const [height, setHeight] = useState(0);
  const [show, setShow] = useState(false);
  const scrollHeightRef = useRef(0);
  const scrollbarRef = useRef(null);
  const [page] = usePage();

  useEffect(() => {
    if (page === 1) {
      setShow(true);
    }

    return () => setShow(false);
  }, [page]);

  useEffect(() => {
    scrollHeightRef.current =
      parseInt(getComputedStyle(scrollbarRef.current).height) - 104;
  }, []);

  const handleScroll = (e) => {
    const percent =
      (e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight)) *
      100;

    const finalHeight = (scrollHeightRef.current * percent) / 100;

    setHeight(finalHeight);
  };

  const pageClasses = ["page_two"];

  if (show) {
    pageClasses.push("animate");
  }

  return (
    <Layout className={pageClasses.join(" ")}>
      <Header />

      <div className="content">
        <div className="title">
          <div>Текст</div>
          <div>сообщения</div>
        </div>
        <div className="article-container">
          <div ref={scrollbarRef} className="scrollbar">
            <div
              style={{
                transform: `translateY(${height}px)`,
              }}
              className="scrollbar__thumb"
            />
            <div className="scrollbar__way" />
          </div>
          <div className="article">
            <div onScroll={handleScroll} className="article__text">
              <b> Lorem ipsum dolor sit amet,</b>
              consectetur adipisicing elit. Explicabo ipsam omnis esse repellat
              similique, reprehenderit magni, fugit nihil aut quaerat dolore
              reiciendis voluptatum dicta odit, nobis consequuntur sapiente. Vel
              ducimus exercitationem, aspernatur corrupti sit asperiores
              voluptas sed dolorem, repudiandae facilis quibusdam libero magni
              iste rem commodi fugit quia. Cum aliquid iste provident id
              laborum, aperiam magnam repellendus quis dolorem. Quasi sequi
              aspernatur numquam accusantium beatae commodi autem eligendi
              doloribus, suscipit quam ea ipsam iure laudantium iusto quas modi
              ab dolore eum, nesciunt ipsum deserunt cum nemo officia. Itaque,
              id unde?consectetur adipisicing elit. Explicabo ipsam omnis esse
              repellat similique, reprehenderit magni, fugit nihil aut quaerat
              dolore reiciendis voluptatum dicta odit, nobis consequuntur
              sapiente. Vel ducimus exercitationem, aspernatur corrupti sit
              asperiores voluptas sed dolorem, repudiandae facilis quibusdam
              libero magni iste rem commodi fugit quia. Cum aliquid iste
              provident id laborum, aperiam magnam repellendus quis dolorem.
              Quasi sequi aspernatur numquam accusantium beatae commodi autem
              eligendi doloribus, suscipit quam ea ipsam iure laudantium iusto
              quas modi ab dolore eum, nesciunt ipsum deserunt cum nemo officia.
              Itaque, id unde?
            </div>
          </div>
        </div>
      </div>

      <div className="logo" />

      <div className="sperm-3" />
      <div className="sperm-4" />
      <div className="sperm-5" />
      <div className="sperm-6" />
      <div className="sperm-7" />
    </Layout>
  );
};
export default PageTwo;
