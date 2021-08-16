const fs = require("fs");
const path = require("path");

const createUniqueID = () => {
  var time = new Date();
  var UniqueID = "";
  for (var i = 0; i < 10; i++) {
    var code = Math.floor(Math.random() * (90 - 65) + 65);
    UniqueID += String.fromCharCode(code);
  }
  UniqueID += String(time.getTime());
  return UniqueID;
};

const fixTextSpaceAndLine = (string) => {
  var temp = String(string);
  temp = temp.replaceAll("\n", "");
  temp = temp.trim();
  return temp;
};

const writeLog = (code, message, req) => {
  let logPath = path.join(__dirname.replace("/base", "/log"), "/log.csv");
  let date = new Date().toString();
  let ip = req.ip;
  let hostname = req.hostname;
  let row = `${date},${code},${message},${hostname},${ip}\n`;
  fs.readFile(logPath, "utf8", (err, data) => {
    data += row;
    fs.writeFile(logPath, data, (err) => {
      if (err) {
        console.log("Error writing log to csv file", err);
      } else {
        console.log(`Write log done !`);
      }
    });
  });
};

module.exports = {
  createUniqueID,
  fixTextSpaceAndLine,
  writeLog,
};
