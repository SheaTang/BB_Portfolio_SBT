//Parent components
function Spa() {
  return (
    <HashRouter>
      <h1>HELLO THERE ARE ALOT OF PEOPLE </h1>
      <NavBar />
      <UserContext.Provider
        value={{
          users: [
            {
              name: "sheena",
              email: "sheenabish@mac.com",
              password: "secret",
              balance: 100,
            },
          ],
        }}
      >
        <div className="container" style={{ padding: "20px" }}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          {/* <Route path="/transactions/" component={Transactions} /> */}
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

// function Login() {
//   const [show, setShow] = React.useState(true);
//   const [status, setStatus] = React.useState("");
// const myCarouselElement = document.querySelector('#myCarousel')

// const carousel = new bootstrap.Carousel(myCarouselElement, {
//   interval: 2000,
//   touch: false
// })

ReactDOM.render(<Spa />, document.getElementById("root"));

// bootstrap.Carousel.getInstance(element)

// bootstrap.Carousel.getOrCreateInstance(element).
