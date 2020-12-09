import spaceList from "./spaces.json";

const SLUG_KEY = "slug";
const NAME_KEY = "name";

export const parseSnapshotMessage = (raw) => {
  let { body, ...rest } = raw;
  let token = null;
  let slug = null;
  if (body) {
    try {
      body.msg = JSON.parse(body.msg);
    } catch (e) {
      console.error("Error parsing msg");
    }
    ({ space: slug } = body.msg);
    try {
      body[SLUG_KEY] = slug;
      body[NAME_KEY] = spaceList[slug.toLowerCase()].name;
      token = spaceList[slug.toLowerCase()].token;
    } catch (e) {
      console.error(
        `Error finding details for space "${space}". Try running the script "importSpaces" to update the space data.`
      );
    }
    // TODO: Previous Snapshot API. delete if unused
    // ({ token } = body.msg);
    // if (token) {
    //   const space = spaceList[token.toLowerCase()];
    //   if (space) {
    //     const { name, key } = space;
    //     slug = key;
    //     body[DATA_SLUG_KEY] = slug;
    //     body[DATA_NAME_KEY] = name;
    //     console.log(body);
    //   } else {
    //     console.log(`Error finding space for token ${token}`);
    //   }
    // }
  }
  return { parsed: { body, ...rest }, slug, token };
};
