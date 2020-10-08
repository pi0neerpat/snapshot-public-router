import axios from "axios";

import approvedAppList from "../approvedAppList.js";
import spaceList from "../spaces.json";

module.exports = async (req, res) => {
  try {
    for (var i = 0; i < approvedAppList.length; i++) {
      console.log("posting to ", approvedAppList[i].endpoint);
      await axios.post(approvedAppList[i].endpoint, "hello");
    }
    res.json({
      body: `Sent updates to ${approvedAppList.length} apps.`,
    });
  } catch (e) {
    res.json({
      body: `Error sending updates: ${e}`,
    });
  }
};
