const Contact = () => {
  return (
    <section className="contact">
    <h2>Contact Me...</h2>
      <div className="contact__list">
        <div className="contact__email">
          <i className="fas fa-envelope" />
          Email
          <p>email@email.com</p>
        </div>
        <div className="contact__phone">
          <i className="fas fa-mobile-alt" />
          Phone
          <p>+1(555)5555555</p>
        </div>
        <div className="contact__address">
          <i className="fa-solid fa-location-dot" />
          Address
          <p>123 First St. Houston, TX</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
