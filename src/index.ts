import { DockerContainer } from "./container";

DockerContainer.list()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
