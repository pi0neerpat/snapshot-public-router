import axios from "axios";

import approvedAppList from "../approvedAppList.js";
import { fortifyData } from "../utils/helpers";

module.exports = async (req, res) => {
  try {
    const body = req.body;
    const fortified = fortifyData(body);
    const detailsMessage = `Slug: ${fortified.slug}, Token: ${fortified.body.msg.token}`;
    console.log(`Received msg - ${detailsMessage}`);
    for (var i = 0; i < approvedAppList.length; i++) {
      console.log("Posting to ", approvedAppList[i].endpoint);
      await axios.post(approvedAppList[i].endpoint, fortified);
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
