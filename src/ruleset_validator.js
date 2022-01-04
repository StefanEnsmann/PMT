function countLocations(locations) {
    let results = [];
    for (let subLocation of locations) {
        let keys = Object.keys(subLocation);
        if (keys.includes("locations")) {
            results.push(countLocations(subLocation["locations"]));
        }
        results.push([1,
            keys.includes("items") ? subLocation["items"].length : 0,
            keys.includes("trainers") ? subLocation["trainers"].length : 0,
            keys.includes("pokemon") ? subLocation["pokemon"].length : 0,
            keys.includes("trades") ? subLocation["trades"].length : 0
        ]);
    }
    return results.reduce((p, c) => p.map((v, i) => v + c[i]), [0, 0, 0, 0, 0]);
}

function validateRuleset(ruleSetString) {
    try {
        let ruleSet = JSON.parse(ruleSetString);
        let details = {};
        details["name"] = ruleSet["name"];
        details["game"] = ruleSet["game"];
        details["pokemon"] = ruleSet["pokedex"].length;
        details["languages"] = ruleSet["languages"];
        details["story_items"] = 0;
        for (let category of ruleSet["story_items"]) {
            details["story_items"] += category["items"].length;
        }
        [details["locations"], details["items"], details["trainers"], details["static_pokemon"], details["trades"]] = countLocations(ruleSet["locations"]);
        return details;
    }
    catch (e) {
        console.log(e.stack);
        return null;
    }
}

module.exports = validateRuleset;