import cross from "../assets/images/icon-menu-close.svg";

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <aside className={isOpen ? "sidebar show" : "sidebar"}>
      <div className="sidebar-wrapper">
        <button className="close-sidebar">
          <img
            src={cross}
            alt=""
            onClick={() => {
              closeSidebar();
            }}
          />
        </button>
        <div className="sidebar-links">
          <ul className="sidebar-links-list">
            <li className="sidebar-list-item">
              <a href="/">home</a>
            </li>
            <li className="sidebar-list-item">
              <a href="/">new</a>
            </li>
            <li className="sidebar-list-item">
              <a href="/">popular</a>
            </li>
            <li className="sidebar-list-item">
              <a href="/">trending</a>
            </li>
            <li className="sidebar-list-item">
              <a href="/">categories</a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
