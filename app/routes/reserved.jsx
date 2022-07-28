import { Form } from "@remix-run/react";
import reservedConfig from "../../config/reserved.json";

export default function Reserved() {
  return (
    <Form method="post" action="/create-qr" className="row g-3">
      <h1>Create Reserved Ticket</h1>

      {reservedConfig.formData.map((data) => (
        <div className="col-md-6" key={data.name}>
          <label htmlFor={data.name} className="form-label">
            {data.label}
          </label>
          <input type={data.type} className="form-control" id={data.name} name={data.label} />
        </div>
      ))}

      <input type="hidden" name="title" value="Reserved Ticket" />
      <input type="hidden" name="disclaimers" value={reservedConfig.disclaimers.join("~")} />

      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3">
          Submit
        </button>
      </div>
    </Form>
  );
}
