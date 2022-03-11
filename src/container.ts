import { spawn, exec } from "child_process";
export class DockerContainer {
  // id: string;
  static list(): Promise<any[]> {
    const cmd = spawn("docker", ["ps", "--format", "{{json .}}"]);
    return new Promise<any[]>((resolve, reject) => {
      /*let containers: String = "",
        error = "";
      cmd.stdout.on("data", (chunk: any) => {
        containers += chunk.toString();
      });
      cmd.stdout.on("end", () => {
        let res = containers.split('\n').map(function (record) {
          record = record.split("\\").join("")
          return JSON.parse(record)
      });
      resolve (res);
        // resolve(
        //   JSON.parse(
        //     `[${containers.split("\n").join().split("}{").join("},{")}]`
        //   )
        // );
      });
      cmd.stderr.on("data", (chunk: any) => reject(chunk));*/
    });
  }
}
