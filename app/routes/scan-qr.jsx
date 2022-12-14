import { useState } from "react";
import { QrReader } from "react-qr-reader";

export default function ScanQR() {
  const [data, setData] = useState(undefined);

  return (
    <div className="h-100 p-5 mb-4 bg-light border rounded-3 text-center">
      <h2>Scan QR code and get PNR data</h2>
      <br />
      {data ? null : (
        <QrReader
          constraints={{ facingMode: "environment" }}
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
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
