//data from: https://opendata.visitflanders.org/sector/accommodation/base_registry
//all data from: https://opendata.visitflanders.org/sector/accommodation/base_registry.json?limit=-1
const fs = require('fs');
const turf = require('@turf/turf');

let features = []
let collection = null
const run = async () => {
    const data = fs.readFileSync("./base_registry.json", { encoding: "utf-8" })
    const registry = JSON.parse(data);

    for (let index = 0; index < registry.length; index++) {
        const e = registry[index];
        let properties = Object.fromEntries(
            Object.entries(e)
                .filter(([k, v]) => {
                    return !!v;
                })
        );

        let geometryPointWithProperties = turf.point([e.long, e.lat], properties);
        features.push(geometryPointWithProperties)
    }

    console.log(features[0])
    let collection = turf.featureCollection(features);
    fs.writeFileSync("./data.geojson", JSON.stringify(collection, null, 2));
}

run()