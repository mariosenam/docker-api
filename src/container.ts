import { spawn, exec } from "child_process";
export class DockerContainer {
  // id: string;
  parseData(data: any): any {}
  static list(): Promise<any[]> {
    const cmd = spawn("docker", [
      "ps",
      "--format",
      "{'Id':'{{.ID}}','Name': '{{.Names}}','Images': '{{.Images}}'},",
    ]);

    const cmdAdditional = spawn("docker", [
      "ps",
      "--format",
      "--filter ID=da43e8531b6d",
      "{{json .}}",
    ]);
    return new Promise<any[]>((resolve, reject) => {
      let containers: any = "[",
        error = "";
      cmd.stdout.on("data", (chunk: any) => {
        try {
          containers += chunk;
        } catch {
          error += chunk;
        }
        containers += chunk.toString();
      });
      cmd.stdout.on("end", () => {
        const temp = containers.split("");
        temp[temp.length - 2] = "]";
        containers = temp.join("").replaceAll("'", '"');
        resolve(JSON.parse(containers));
      });
      cmd.stderr.on("data", (chunk: any) => reject(chunk));
    });
  }
}
