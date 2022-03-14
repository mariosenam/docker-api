// import { spawn } from "child_process";
// const ls = spawn('docker', ['ps', '--format', "{{json .}}"]);

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

import { DockerContainer } from "./container";

DockerContainer.list()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
