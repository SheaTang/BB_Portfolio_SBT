function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        {/* Bad Bank */}
        <img src="image/1.2.png" className="img-fluid" alt="Responsive image" />
      </a>
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
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/">
              Create Account
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/login/">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/">
              Deposit
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/">
              Withdraw
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/balance/">
              Balance
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/">
              AllData
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

//Testing [COMMENT]
(function () {
  "use strict"; // Start of use strict [COMMENT]

  var mainNav = document.querySelector("#navbar");

  if (mainNav) {
    var navbarCollapse = mainNav.querySelector(".navbar-collapse");

    if (navbarCollapse) {
      var collapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      });

      var navbarItems = navbarCollapse.querySelectorAll("a");

      // Closes responsive menu when a scroll trigger link is clicked [COMMENT]
      for (var item of navbarItems) {
        item.addEventListener("click", function (event) {
          collapse.hide();
        });
      }
    }

    // Collapse Navbar [COMMENT]
    var collapseNavbar = function () {
      var scrollTop =
        window.pageYOffset !== undefined
          ? window.pageYOffset
          : (
              document.documentElement ||
              document.body.parentNode ||
              document.body
            ).scrollTop;

      if (scrollTop > 100) {
        mainNav.classList.add("navbar-shrink");
      } else {
        mainNav.classList.remove("navbar-shrink");
      }
    };
    // Collapse now if page is not at top [COMMENT]
    collapseNavbar();
    // Collapse the navbar when page is scrolled [COMMENT]
    document.addEventListener("scroll", collapseNavbar);
  }
})();
// End of use strict [COMMENT]
