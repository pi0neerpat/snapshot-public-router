import axios from "axios";

import { exampleProposal, exampleVote } from "../utils/testData.js";
import { parseSnapshotMessage } from "../utils/helpers";

const sendMessage = async (snapshotMessage, endpoint) => {
  let { parsed, token, slug } = parseSnapshotMessage(snapshotMessage);
  console.log(`Received message - Slug: ${slug}, Token: ${token}`);
  await axios.post(endpoint, parsed);
};

module.exports = async (req, res) => {
  try {
    const { endpoint } = req.body;
    await sendMessage(exampleVote, endpoint);
    await sendMessage(exampleProposal, endpoint);
    res.json({
      body: `Test data sent!.`,
    });
  } catch (e) {
    res.json({
      body: `Error sending updates: ${e}`,
    });
  }
};
