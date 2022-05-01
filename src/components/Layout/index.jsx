const Layout = ({ children, className, popup }) => {
  const pageClasses = ["page"];

  if (className) {
    pageClasses.push(className);
  }

  return (
    <div className={pageClasses.join(" ")}>
      <div className="page__container">{children}</div>
      {popup}
    </div>
  );
};

export default Layout;
