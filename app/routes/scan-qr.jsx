import { useState } from "react";
import QrReader from "react-qr-scanner";

export default function ScanQR() {
  const [QRData, setQrData] = useState(undefined);

  function handleScan(data) {
    console.log(JSON.parse(data));
    setQrData(JSON.parse(data));
  }

  return (
    <div>
      <h2>Scan QR code and get PNR data</h2>
      <br />
      {QRData ? null : (
        <QrReader
          delay={500}
          style={{
            height: 240,
            width: 320,
          }}
          // facingMode="rear"
          onError={(err) => alert(err)}
          onScan={handleScan}
        />
      )}
      {QRData && <h3>Ticket Validated Successfully!!! Booking details are - </h3>}
      {QRData
        ? Object.keys(QRData).map((e) => {
            return (
              <p>
                {e} - {QRData[e]}
              </p>
            );
          })
        : null}
    </div>
  );
}
