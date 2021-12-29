function len(arr) {
    return Object.keys(arr).length;
}

function countLocations(locations) {
    let results = [];
    for (let subLocations of Object.values(locations)) {
        results.push(countLocations(subLocations["locations"]));
        results.push([1, len(subLocations["items"]), len(subLocations["trainers"]), len(subLocations["pokemon"]), len(subLocations["trades"])]);
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
        for (let category of Object.values(ruleSet["story_items"])) {
            details["story_items"] += Object.keys(category).length;
        }
        [details["locations"], details["items"], details["trainers"], details["static_pokemon"], details["trades"]] = countLocations(ruleSet["locations"]);
        return details;
    }
    catch (e) {
        console.log(e.message);
        return null;
    }
}

module.exports = validateRuleset;