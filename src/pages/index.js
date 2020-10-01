import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/index.css";

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/date");
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Helmet>
        <title>Snapshot Public Router</title>
      </Helmet>
      <h1>Snapshot Public Router</h1>
      <h2>
        Forwards all events from{" "}
        <a
          href="https://snapshot.page"
          target="_blank"
          rel="noreferrer noopener"
        >
          ⚡ Snapshot
        </a>{" "}
        to your app.
      </h2>
      <p>
        Want to receive Snapshot events? Please make a Pull Request here:
        <br />
        <a href="https://github.com/pi0neerpat/snapshot-public-router">
          https://github.com/pi0neerpat/snapshot-public-router
        </a>
      </p>
    </main>
  );
}

export default Index;
