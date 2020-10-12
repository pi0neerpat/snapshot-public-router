import spaceList from "./spaces.json";

const DATA_SLUG_KEY = "slug";
const DATA_NAME_KEY = "name";

export const parseSnapshotMessage = (raw) => {
  let { body, ...rest } = raw;
  let token = null;
  let slug = null;
  if (body) {
    try {
      body.msg = JSON.parse(body.msg);
    } catch (e) {
      console.log("Error parsing msg");
    }
    token = body.msg.token;
    if (token) {
      const space = spaceList[token.toLowerCase()];
      if (space) {
        const { name, key } = space;
        slug = key;
        body[DATA_SLUG_KEY] = slug;
        body[DATA_NAME_KEY] = name;
        console.log(body);
      } else {
        console.log(`Error finding space for token ${token}`);
      }
    }
  }
  return { parsed: { body, ...rest }, token, slug };
};
