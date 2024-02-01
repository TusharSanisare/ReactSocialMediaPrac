const Sidebar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div
      className="my-sidebar d-flex flex-column flex-shrink-0 p-3 bg-body-secondary"
      style={{ width: 280 }}
    >
      <span className="fs-4 mx-auto">Dashboard</span>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li
          onClick={() => {
            setSelectedTab("Home");
          }}
        >
          <a
            href="#"
            className={`${
              selectedTab === "Home" ? "active" : "link-body-emphasis"
            } nav-link`}
          >
            Home
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("CreatePost");
          }}
        >
          <a
            href="#"
            className={`${
              selectedTab === "CreatePost" ? "active" : "link-body-emphasis"
            } nav-link`}
          >
            Create Post
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-body-emphasis">
            Orders
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-body-emphasis">
            Products
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-body-emphasis">
            Customers
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width={32}
            height={32}
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
