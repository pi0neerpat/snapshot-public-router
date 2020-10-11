import axios from "axios";

import { exampleProposal, exampleVote } from "../utils/testData.js";
import { fortifyData } from "../utils/helpers";

module.exports = async (req, res) => {
  try {
    const { endpoint } = req.body;
    await axios.post(endpoint, fortifyData(exampleProposal));
    await axios.post(endpoint, fortifyData(exampleVote));
    res.json({
      body: `Test data sent!.`,
    });
  } catch (e) {
    res.json({
      body: `Error sending updates: ${e}`,
    });
  }
};
