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

ui.createAccount =(  
    <div class="card text-white bg-primary mb3" style="max-width: 18rem;">
        <div class="card-header">CreateAccount</div>
        <div class="card-body">
            Name<br>
            <input type="input" class="form-control" id="name" placeholder="Enter name"></br>
            Email address<br>
            <input type="input" class="form-control" id="email" placeholder="Enter email"><br>
            Password<br>
            <input type="password" class="form-control" id="password" placeholder="Enter password"><br>
            <button type="submit" id="submit" class="btn" onClick="create()">Create Account</button>
            <div id='createStatus'></div>
        </div>
    </div>
);

ui.login =(  
    <div class="card text-white bg-secondary mb3" style="max-width: 18rem;">
        <div class="card-header">Login</div>
        <div class="card-body">
            Email<br>
            <input type="input" class="form-control" id="loginEmail" placeholder="Enter email"></br>
            Password<br>
            <input type="password" class="form-control" id="loginPassword" placeholder="Enter password"><br>
            <button type="submit" id="submit" class="btn" onClick="login()">Login</button>
            <div id='loginStatus'></div>
        </div>
    </div>
);

ui.deposit =(  
    <div class="card text-white bg-warning mb3" style="max-width: 18rem;">
        <div class="card-header">Deposit</div>
        <div class="card-body">
            Email<br>
            <input type="input" class="form-control" id="depositEmail" placeholder="Enter email"></br>
            Amount<br>
            <input type="number" class="form-control" id="depositAmount" placeholder="Enter amount"><br>
            <button type="submit" class="btn" onClick="deposit()">Deposit</button>
            <div id='depositStatus'></div>
        </div>
    </div>
);