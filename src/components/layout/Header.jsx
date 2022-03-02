function Header() {
  return (
    <nav className="deep-purple accent-1">
      <div className="container">
        <div className="nav-wrapper">
          <a href="!#" className="brand-logo">
            React shop
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="!#">Repo</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export { Header };
