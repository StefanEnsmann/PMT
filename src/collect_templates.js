const path = require("path");
const fs = require("fs");
const validateRuleset = require("./ruleset_validator");

const relative_path = "game_data"
const data_path = path.join(path.dirname(__dirname), "public", relative_path);

fs.readdir(data_path, function (err, files) {
    if (err) {
        return console.log("Unable to scan directory: " + err);
    }

    let details = [];

    files.forEach(function (file) {
        if (file !== "_details.json") {
            console.log("Processing " + file);
            let d = validateRuleset(fs.readFileSync(path.join(data_path, file)));
            if (d !== null) {
                d["path"] = path.join(relative_path, file);
                details.push(d);
            }
        }
    });
    fs.writeFileSync(path.join(data_path, "_details.json"), JSON.stringify(details, null, 2), "utf8");
});