import spaceList from "./spaces.json";

const DATA_SLUG_KEY = "slug";
const DATA_NAME_KEY = "name";

export const parseSnapshotMessage = (raw) => {
  let { network, body: parsed } = raw;
  console.log(parsed);
  let token = null;
  let slug = null;
  if (parsed) {
    try {
      parsed.msg = JSON.parse(parsed.msg);
    } catch (e) {
      console.log("Error parsing msg");
    }
    token = parsed.msg.token;
    if (token) {
      const space = spaceList[token.toLowerCase()];
      if (space) {
        const { name, key } = space;
        slug = key;
        parsed[DATA_SLUG_KEY] = slug;
        parsed[DATA_NAME_KEY] = name;
      } else {
        console.log(`Error finding space for token ${token}`);
      }
    }
  }
  return { parsed, token, slug };
};
