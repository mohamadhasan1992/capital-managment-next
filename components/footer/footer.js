import react from "react";

const Footer = () => {
    return (
      <nav dir="rtl" className="navbar navbar-expand-lg bg-dark navbar-light">
        <p className="navbar-brand text-light">
          سامانه مدیریت سرمایه
        </p>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                خانه <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                 سیگنال
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                درباره ما
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ارتباط با ما
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Footer;