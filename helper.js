const filesystem = require("fs");

const read = () => {
  const data = filesystem.readFileSync("db.json", { encoding: "utf-8" });
  return JSON.parse(data);
};

const save = data => {
  const stringfiydata = JSON.stringify(data);
  filesystem.writeFileSync("db.json", stringfiydata);
};

module.exports = {
  read,
  save
};
