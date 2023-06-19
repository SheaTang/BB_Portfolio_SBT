function Home() {
  return (
    <Card
      bgcolor="black"
      txtcolor="black"
      header={
        <img
          src="image/SVB_land.jpg"
          className="img-fluid"
          alt="Responsive image"
        />
      }
      title="Welcome to Bad Banking!"
      text="You can move around using the navigation bar."
      body={
        <img
          src="image/bank.png"
          className="img-fluid"
          alt="Responsive image"
        />
      }
    />
  );
}
