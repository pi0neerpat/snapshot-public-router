import React from "react";
import "../styles/index.css";
import approvedAppsList from "../../approvedAppsList.js";
import SEO from "../components/seo";
import logoImage from "../images/favicon.png";

function Index() {
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
        <br />
        Approved Apps:
      </h2>
      <ul>
        {approvedAppsList &&
          approvedAppsList.map((app, index) => (
            <p key={(index, app.name)}>
              {app.name} -{" "}
              <a href={app.endpoint} target="_blank" rel="noreferrer noopener">
                {app.endpoint}
              </a>
            </p>
          ))}
      </ul>
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
