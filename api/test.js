import axios from "axios";

import { exampleProposal, exampleVote } from "../testData.js";

module.exports = async (req, res) => {
  try {
    const { endpoint } = req.body;
    await axios.post(endpoint, exampleProposal);
    await axios.post(endpoint, exampleVote);
    res.json({
      body: `Test data sent!.`,
    });
  } catch (e) {
    res.json({
      body: `Error sending updates: ${e}`,
    });
  }
};
