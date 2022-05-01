import { usePage } from "../../hooks/usePage";

import "./index.css";

const Header = () => {
  const [, setPage] = usePage();

  return (
    <div className="header">
      <div onClick={() => setPage(0)} className="home-icon clickable" />
      <div className="vert-divider" />
      <div className="header__title">PROJECT</div>
    </div>
  );
};

export default Header;
