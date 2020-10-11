import axios from "axios";

import { exampleProposal, exampleVote } from "../utils/testData.js";
import { parseSnapshotMessage } from "../utils/helpers";

module.exports = async (req, res) => {
  try {
    const { endpoint } = req.body;
    const { parsed: parsedVote } = parseSnapshotMessage(exampleVote);
    const { parsed: parsedProposal } = parseSnapshotMessage(exampleProposal);
    await axios.post(endpoint, parsedProposal);
    await axios.post(endpoint, parsedVote);
    res.json({
      body: `Test data sent!.`,
    });
  } catch (e) {
    res.json({
      body: `Error sending updates: ${e}`,
    });
  }
};
