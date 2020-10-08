import spaceList from "../spaces.json";

const DATA_SLUG_KEY = "slug";
const DATA_NAME_KEY = "name";

export const fortifyData = (raw) => {
  let data = { body: raw };
  if (data.body.msg) {
    let msg = data.body.msg;
    if (typeof msg === "string") {
      // Snapshot passes the message as a string
      try {
        msg = JSON.parse(msg);
      } catch (e) {
        console.log("Error parsing msg");
        return console.log(e);
      }
    }
    const { token } = msg;
    if (!token) return;
    const space = spaceList[token];
    const { name, key } = space;
    if (space) {
      data[DATA_SLUG_KEY] = key;
      data[DATA_NAME_KEY] = name;
    }
  }
  return data;
};
