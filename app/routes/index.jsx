import { Link } from "@remix-run/react";

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
    <div className="col-md-6 mb-4">
      <div class="card" style={{ width: "100%" }}>
        <img src="/601658-indian-rail-qr.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h2>Ticket with QR</h2>
          <p class="card-text">
            Passengers who book Rail ticket online or through counter will have QR code printed on their ticket for each of the passengers on the
            ticket. This QR code will act as platform ticket as well as it will be scanned at Train entrance gate.
          </p>
        </div>
      </div>
    </div>

    <div className="col-md-6 mb-4">
      <Link to="/scan-qr">
        <div class="card" style={{ width: "100%" }}>
          <img src="/Picture1-590x394.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h2>Scan QR</h2>
            <p class="card-text">
              The person who needs to enter into Railway station will purchase platform ticket online and as a confirmation he will be provided
              SMS/email with a QR code. This QR code will be scanned at Railway station and he can enter without any human checking.
            </p>
          </div>
        </div>
      </Link>
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
