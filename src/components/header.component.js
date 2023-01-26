
const Header = () => {
    return(
        <header className="header">
        {/* <!-- page --> */}
        <div className="page">
          <a href="#" className="logo">
            <img src="./exercise-01_files/logo-v.svg" alt="Viberate" /> Viberate
          </a>

          <nav className="navigation-primary">
            <ul className="menu-sys">
              <li>
                <button style={{ color: "white"}} class="btn  search">Search</button>
              </li>
              <li>
                <button className="btn more">More</button>
              </li>
            </ul>

            <ul className="menu">
              <li>
                <a href="">Artist 1</a>
              </li>
              <li>
                <a href="">Artist 2</a>
              </li>
              <li>
                <a href="">Artist 3</a>
              </li>
            </ul>
          </nav>
        </div>
        {/* <!-- /page --> */}
      </header>
    //   <!-- /HEADER -->
    )
}

export default Header