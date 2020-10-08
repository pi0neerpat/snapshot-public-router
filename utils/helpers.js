import spaceList from "../spaces.json";

const DATA_SLUG_KEY = "slug";
const DATA_NAME_KEY = "name";

export const fortifyData = (raw) => {
  let data = { body: raw };
  if (data.body.msg.token) {
    const token = data.body.msg.token;
    const space = spaceList[token];
    const { name, key } = space;
    if (space) {
      data[DATA_SLUG_KEY] = key;
      data[DATA_NAME_KEY] = name;
    }
  }
  return data;
};
