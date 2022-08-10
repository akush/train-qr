import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import styles from "./styles/shared.css";
import Header from "./components/header";

export const meta = () => ({
  charset: "utf-8",
  title: "Train Booking",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />

        <Links />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossOrigin="anonymous"
        />
      </head>

      <body>
        <div className="container">
          <Header />

          <Outlet />
          <footer className="footer pt-3 mt-4 border-top">© 2022</footer>
        </div>

        <ScrollRestoration />

        <script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
          crossOrigin="anonymous"
        ></script>
        <Scripts />

        <LiveReload />
      </body>
    </html>
  );
}
