var ui = {};

ui.navigation = (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">
      Bad Bank
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
          <a
            className="nav-link"
            href="#CreateAccount"
            onClick="loadCreateAccount()"
            id="CreateAccount"
          >
            Create Account
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick="loadLogin()" id="login">
            Login
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick="loadDeposit()">
            Deposit
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick="loadWithdraw()">
            Withdraw
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick="loadBalance()">
            Balance
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick="loadAllData()">
            AllData
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;

ui.createAccount = (
    <div class="card-header">CreateAccount</div>
    <div class="card-body">
        Name<br>
        <input type="input" class="form-control" id="name" placeholder="Enter name"></br>

    </div>
)