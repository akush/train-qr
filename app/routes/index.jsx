const Hero = () => {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Rishabh &amp; Pushkar</h1>
        <p className="col-md-8 fs-4">Students of Class 12</p>
      </div>
    </div>
  );
};

const About = () => (
  <div className="row align-items-md-stretch">
    <div className="col-md-6">
      <div className="h-100 p-5 text-bg-dark rounded-3">
        <h2>Scan QR</h2>
        <p>
          The person who needs to enter into Railway station will purchase platform ticket online and as a confirmation he will be provided SMS/email
          with a QR code. This QR code will be scanned at Railway station and he can enter without any human checking.
        </p>
      </div>
    </div>
    <div className="col-md-6">
      <div className="h-100 p-5 bg-light border rounded-3">
        <h2>Ticket with QR</h2>
        <p>
          In the similar fashion, passengers who book Rail ticket online or through counter will have QR code printed on their ticket for each of the
          passengers on the ticket. This QR code will act as platform ticket as well as it will be scanned at Train entrance gate.
        </p>
      </div>
    </div>
  </div>
);

export default function Index() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}
