import { spawn, exec } from "child_process";
import { lstat } from "fs";
export class DockerContainer {
  static list(): Promise<any[]> {
    /**
     * List all containers running on the host
     * @returns {Promise<any[]>}
     * @memberof DockerContainer
     * @example
     * DockerContainer.list()
     * .then((data) => {
     *  console.log(data);
     * })
     */
    const cmd = spawn("docker", ["ps", "--format", "{{json .}}"]);
    return new Promise<any[]>((resolve, reject) => {
      let containers = "";
      cmd.stdout.on("data", (chunk: any) => {
        containers += chunk.toString();
      });
      cmd.stdout.on("end", () => {
        let data = containers.split("\n");
        data.pop();
        resolve(JSON.parse(`[${data.join(",")}]`));
      });
      cmd.stderr.on("data", (chunk: any) => reject(chunk.toString()));
    });
  }
}
