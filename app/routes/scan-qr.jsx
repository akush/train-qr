import { useState } from "react";
import { QrReader } from "react-qr-reader";

export default function ScanQR() {
  const [data, setData] = useState(undefined);

  const setQRData = (text) => {
    if (!text) return;
    try {
      const d = JSON.parse(text);
      setData(d);
    } catch (e) {
      setData({ text });
    }
  };

  return (
    <div>
      <h2>Scan QR code and get PNR data</h2>
      <br />
      {data ? null : (
        <QrReader
          constraints={{ facingMode: "environment" }}
          onResult={(result, error) => {
            if (!!result) {
              setQRData(result?.text);
            }

            if (!!error) {
              console.info(error);
            }
          }}
          style={{ width: "100%" }}
        />
      )}
      {data && <h3>Ticket Validated Successfully!!! Booking details are - </h3>}
      {data ? <p>{data}</p> : null}
    </div>
  );
}
