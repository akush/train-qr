import { json } from "@remix-run/node";
import { Form, useLoaderData, useActionData } from "@remix-run/react";
import { QRCodeSVG } from "qrcode.react";

import reservedConfig from "../../config/reserved.json";
import platformConfig from "../../config/platform.json";
import unreservedConfig from "../../config/unreserved.json";

export const loader = async ({ params }) => {
  const config = {
    reserved: reservedConfig,
    platform: platformConfig,
    unreserved: unreservedConfig,
  };
  return json({ config: config[params.ticket] });
};

export async function action({ request }) {
  const body = await request.formData();
  const { disclaimers, title, ...values } = Object.fromEntries(body);
  return json({ disclaimers, title, values });
}

export default function Ticket() {
  const { config } = useLoaderData();
  const data = useActionData();

  if (!config?.header) {
    return <>Not found</>;
  }

  if (data?.title) {
    return (
      <div className="bookingDetailsContainer h-100 p-5 mb-4 bg-light border rounded-3">
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

  return (
    <Form method="post" className="container-fluid row g-3 h-100 p-5 mb-4 bg-light border rounded-3">
      <h1>{config.header}</h1>

      {config.formData.map((data) => (
        <div className="col-md-6" key={data.name}>
          <label htmlFor={data.name} className="form-label">
            {data.label}
          </label>
          <input type={data.type} className="form-control" id={data.name} name={data.label} required />
        </div>
      ))}

      <input type="hidden" name="title" value={config.header} />
      <input type="hidden" name="disclaimers" value={config.disclaimers.join("~")} />

      <div className="col-md-12 text-center">
        <button type="submit" className="btn btn-primary mb-3">
          Submit
        </button>
      </div>
    </Form>
  );
}
