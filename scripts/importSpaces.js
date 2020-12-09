const fs = require("fs-extra");
const path = require("path");
const util = require("util");

const directoryPath = path.join(__dirname, "../snapshot-spaces/spaces");
const readdir = util.promisify(fs.readdir);

const importSpaces = async () => {
  let spaces = {};
  const dirs = await readdir(directoryPath);
  dirs.map((dir) => {
    dirs.forEach((dir, index) => {
      const space = require(path.join(directoryPath, dir));
      const { token, key, name } = space;
      if (key) spaces[key.toLowerCase()] = { token, name };
    });
  });
  fs.writeFileSync(`utils/spaces.json`, JSON.stringify(spaces), (err) => {
    if (err) throw err;
  });
};

importSpaces();
