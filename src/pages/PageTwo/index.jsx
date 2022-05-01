import Header from "../../components/Header";
import Layout from "../../components/Layout";

import "./index.css";
import "./sperms.css";

const PageTwo = () => {
  return (
    <Layout className="page_two">
      <Header />

      <div className="content">
        <div className="title">
          <div>Текст</div>
          <div>сообщения</div>
        </div>
        <div className="article">
          <div className="article__text">
            <b> Lorem ipsum dolor sit amet,</b>
            consectetur adipisicing elit. Explicabo ipsam omnis esse repellat
            similique, reprehenderit magni, fugit nihil aut quaerat dolore
            reiciendis voluptatum dicta odit, nobis consequuntur sapiente. Vel
            ducimus exercitationem, aspernatur corrupti sit asperiores voluptas
            sed dolorem, repudiandae facilis quibusdam libero magni iste rem
            commodi fugit quia. Cum aliquid iste provident id laborum, aperiam
            magnam repellendus quis dolorem. Quasi sequi aspernatur numquam
            accusantium beatae commodi autem eligendi doloribus, suscipit quam
            ea ipsam iure laudantium iusto quas modi ab dolore eum, nesciunt
            ipsum deserunt cum nemo officia. Itaque, id unde?consectetur
            adipisicing elit. Explicabo ipsam omnis esse repellat similique,
            reprehenderit magni, fugit nihil aut quaerat dolore reiciendis
            voluptatum dicta odit, nobis consequuntur sapiente. Vel ducimus
            exercitationem, aspernatur corrupti sit asperiores voluptas sed
            dolorem, repudiandae facilis quibusdam libero magni iste rem commodi
            fugit quia. Cum aliquid iste provident id laborum, aperiam magnam
            repellendus quis dolorem. Quasi sequi aspernatur numquam accusantium
            beatae commodi autem eligendi doloribus, suscipit quam ea ipsam iure
            laudantium iusto quas modi ab dolore eum, nesciunt ipsum deserunt
            cum nemo officia. Itaque, id unde?
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
