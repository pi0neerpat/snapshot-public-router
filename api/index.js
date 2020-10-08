import axios from "axios";

import approvedAppList from "../approvedAppList.js";
import { fortifyData } from "../utils/helpers";

module.exports = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    for (var i = 0; i < approvedAppList.length; i++) {
      console.log("posting to ", approvedAppList[i].endpoint);
      await axios.post(approvedAppList[i].endpoint, fortifyData(body));
    }
    res.json({
      body: `Sent updates to ${approvedAppList.length} apps.`,
    });
  } catch (e) {
    console.log(e);
    console.log(body);
    res.json({
      body: `Error sending updates: ${e}`,
    });
  }
};
