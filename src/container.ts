import { spawn, exec } from "child_process";
import { lstat } from "fs";
export class DockerContainer {
  // id: string;
  static list(): Promise<any[]> {
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
