import spaceList from "../spaces.json";

const DATA_SLUG_KEY = "slug";
const SPACE_SLUG_KEY = "key";

export const fortifyData = (raw) => {
  let data = raw;
  if (data.msg.token) {
    const token = data.msg.token.toLowercase();
    const space = spaceList[token];
    if (space) data[DATA_SLUG_KEY] = space[SPACE_SLUG_KEY];
  }
  return data;
};
