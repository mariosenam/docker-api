"use strict";
exports.__esModule = true;
exports.DockerContainer = void 0;
var child_process_1 = require("child_process");
var DockerContainer = /** @class */ (function () {
    function DockerContainer() {
    }
    // id: string;
    DockerContainer.prototype.parseData = function (data) { };
    DockerContainer.list = function () {
        var cmd = (0, child_process_1.spawn)("docker", [
            "ps",
            "--format",
            "{'Id':'{{.ID}}','Name': '{{.Names}}'},'Images': '{{.Images}}'},",
        ]);
        var cmdAdditional = (0, child_process_1.spawn)("docker", [
            "ps",
            "--format",
            "--filter ID=da43e8531b6d",
            "{{json .}}",
        ]);
        return new Promise(function (resolve, reject) {
            var containers = "[", error = "";
            cmd.stdout.on("data", function (chunk) {
                containers += chunk.toString();
            });
            cmd.stdout.on("end", function () {
                var temp = containers.split("");
                temp[temp.length - 2] = "]";
                containers = temp.join("").replaceAll("'", '"');
                resolve(JSON.parse(containers));
            });
            cmd.stderr.on("data", function (chunk) { return reject(chunk); });
        });
    };
    return DockerContainer;
}());
exports.DockerContainer = DockerContainer;
