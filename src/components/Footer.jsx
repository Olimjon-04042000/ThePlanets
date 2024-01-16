function Footer() {
  return (
    <div className="footer">
      <div className="container footer-container">
        <div className="planet-facts">
          <h5 className="rotation-title">ROTATION TIME</h5>
          <p className="rotation-num">58.6 days</p>
        </div>
        <div className="planet-facts">
          <h5 className="revolution-title">REVOLUTION TIME</h5>
          <p className="revolution-num">87.97 days</p>
        </div>
        <div className="planet-facts">
          <h5 className="radius-title">radius</h5>
          <p className="radius-num">2,439.7 km</p>
        </div>
        <div className="planet-facts">
          <h5 className="temp-title">AVERAGE TEMP.</h5>
          <p className="temp-num">430°c</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
