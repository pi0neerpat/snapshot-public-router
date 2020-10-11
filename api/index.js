import axios from "axios";

import approvedAppList from "../approvedAppList.js";
import { parseSnapshotMessage } from "../utils/helpers";

module.exports = async (req, res) => {
  try {
    const snapshotMessage = req.body;
    console.log(snapshotMessage);
    const { parsed, token, slug } = parseSnapshotMessage(snapshotMessage);
    const detailsMessage = `Slug: ${slug}, Token: ${token}`;
    console.log(`Received message - ${detailsMessage}`);
    for (var i = 0; i < approvedAppList.length; i++) {
      console.log("Posting to ", approvedAppList[i].endpoint);
      await axios.post(approvedAppList[i].endpoint, parsed);
    }
    res.json({
      body: `Sent to ${approvedAppList.length} apps. ${detailsMessage}`,
    });
  } catch (e) {
    console.log(e);
    res.json({
      body: `Error sending updates: ${e}`,
    });
  }
};
