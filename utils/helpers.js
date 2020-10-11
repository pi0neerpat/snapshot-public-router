import spaceList from "./spaces.json";

const DATA_SLUG_KEY = "slug";
const DATA_NAME_KEY = "name";

export const fortifyData = (raw) => {
  let data = { body: raw };
  if (data.body.msg) {
    let msg = data.body.msg;
    try {
      msg = JSON.parse(msg);
      data.body.msg = msg;
    } catch (e) {
      console.log("Error parsing msg");
    }
    const { token } = msg;
    if (token) {
      const space = spaceList[token.toLowerCase()];
      const { name, key } = space;
      if (space) {
        data[DATA_SLUG_KEY] = key;
        data[DATA_NAME_KEY] = name;
      } else {
        console.log(`Error finding space for token ${token}`);
      }
    }
  }
  return data;
};
