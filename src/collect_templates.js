const path = require("path");
const fs = require("fs");
const validateRuleset = require("./ruleset_validator");

const data_path = path.join(path.dirname(__dirname), "public", "game_data");
console.log(validateRuleset());

fs.readdir(data_path, function(err, files) {
    if (err) {
        return console.log("Unable to scan directory: " + err);
    }

    files.forEach(function (file) {
        console.log(file);
    });
});