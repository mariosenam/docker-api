"use strict";
// import { spawn } from "child_process";
// const ls = spawn('docker', ['ps', '--format', "{{json .}}"]);
exports.__esModule = true;
// let i = 0;
// ls.stdout.on('data', (data) => {
//   let obj = JSON.parse(data);
//   console.log(i,obj);
//   i++;
// });
// ls.stderr.on('data', (data) => {
//   let obj = JSON.parse(data);
//   console.log(obj);
//   i++;
// });
// ls.on('exit', (code) => {
//   console.log(`Child exited with code ${code}`);
// });
// ls.on('error', error => {
//   console.log(error);
// })
var container_1 = require("./container");
container_1.DockerContainer.list()
    .then(function (data) {
    console.log(data);
})["catch"](function (err) {
    console.log(err);
});
