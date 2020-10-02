import React, { useState } from "react";
import axios from "axios";
import "../styles/index.css";
import approvedAppList from "../../approvedAppList.js";
import SEO from "../components/seo";
import logoImage from "../images/favicon.png";

const Index = () => {
  const [endpoint, setEndpoint] = useState("");
  const onTestEndpoint = async () => {
    await axios.post("/api/test", { endpoint });
  };
  return (
    <main>
      <SEO />
      <h1>
        <img alt="lightning bolt" width={50} src={logoImage} /> Snapshot Public
        Router
      </h1>
      <h2>
        Forwards events from{" "}
        <a
          href="https://snapshot.page"
          target="_blank"
          rel="noreferrer noopener"
        >
          Snapshot
        </a>{" "}
        to your app.
      </h2>
      <p>
        <b>Active Apps:</b>
        <ul>
          {approvedAppList &&
            approvedAppList.map((app, index) => (
              <p key={(index, app.name)}>
                {app.name} -{" "}
                <a
                  href={app.endpoint}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {app.endpoint}
                </a>
              </p>
            ))}
        </ul>
      </p>
      <p>
        Want to receive Snapshot events?
        <br />
        Send an example <code>proposal</code> and <code>vote</code> message to
        your app:
        <input
          id="endpoint"
          placeholder="https://myapp.com"
          type="text"
          defaultValue={endpoint}
          onChange={(e) => setEndpoint(e.target.value)}
        />
        <button onClick={onTestEndpoint}>Go</button>
      </p>
      <p>
        Ready for production? Please make a Pull Request{" "}
        <a href="https://github.com/pi0neerpat/snapshot-public-router">here</a>.
        <br />
      </p>
    </main>
  );
};

export default Index;
