import { json } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { QRCodeSVG } from "qrcode.react";

export async function action({ request }) {
  const body = await request.formData();
  const { disclaimers, title, ...values } = Object.fromEntries(body);
  console.log(disclaimers, values);
  return json({ disclaimers, title, values });
}

export default function Reserved() {
  const data = useActionData();

  const print = () => {
    window?.print();
    return false;
  };

  if (!data) {
    return <p>Waiting...</p>;
  }

  return (
    <div className="bookingDetailsContainer">
      <a href="" onClick={print} className="print">
        Print
      </a>
      <h2>{data.title}</h2>
      <p>Your Ticket is Booked Successfully !!!</p>

      <QRCodeSVG value={JSON.stringify(data.values)} includeMargin={true} size={256} />

      <h3>Booking Details</h3>
      {Object.keys(data.values).map((e) => {
        return (
          <p className="journeyDetails" key={e}>
            {e} - {data.values[e]}
          </p>
        );
      })}

      {data.disclaimers ? <h3 className="disclaimer">Disclaimers</h3> : null}
      <ul className="disclaimer">
        {data.disclaimers?.split("~")?.map((e) => {
          return <li>{e}</li>;
        })}
      </ul>
    </div>
  );
}
