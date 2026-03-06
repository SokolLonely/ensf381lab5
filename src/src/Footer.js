function Footer() {
  const currentDate = new Date().toLocaleDateString();

  return (
    <footer>
      <p>Date: {currentDate}</p>
      <p>Group Members: Murtaaz Javeed, Simon Ryabinkin</p>
    </footer>
  );
}

export default Footer;