import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";

import reservedConfig from "../../config/reserved.json";
import platformConfig from "../../config/platform.json";
import unreservedConfig from "../../config/unreserved.json";

export const loader = async ({ params }) => {
  const config = {
    reserved: reservedConfig,
    platform: platformConfig,
    unreserved: unreservedConfig,
  };
  // console.log("ticket type", params.ticket);
  return json({ config: config[params.ticket] });
};

export default function Ticket() {
  const { config } = useLoaderData();
  if (!config?.header) {
    return <>Not found</>;
  }
  return (
    <Form method="post" action="/create-qr" className="row g-3">
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

      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3">
          Submit
        </button>
      </div>
    </Form>
  );
}
