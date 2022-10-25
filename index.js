//data from: https://opendata.visitflanders.org/sector/accommodation/base_registry
//all data from: https://opendata.visitflanders.org/sector/accommodation/base_registry.json?limit=-1
import csv from "csvtojson";
import axios from "axios";
import { point, featureCollection } from "@turf/turf";

const getCSVconvertToJSON = async () => {
  console.error("fetching data");
  const csvUrl = `https://opendata.visitflanders.org/sector/accommodation/base_registry.csv?limit=-1`;
  const response = await axios.get(csvUrl, { responseType: "blob" });
  const csvString = response.data.toString();
  console.error("done fetching data");
  const o = await csv({
    delimiter: ";",
  }).fromString(csvString);
  return o;
};

const baseRegistryToGeoJson = async () => {
  let features = [];

  const registry = await getCSVconvertToJSON();

  console.error("start creating features");
  for (let index = 0; index < registry.length; index++) {
    const e = registry[index];
    if (!(e.lat && e.long)) {
      continue;
    }
    let properties = Object.fromEntries(
      Object.entries(e).filter(([k, v]) => {
        return !!v;
      })
    );

    let geometryPointWithProperties = point([e.long, e.lat], properties);
    features.push(geometryPointWithProperties);
  }
  const fc = featureCollection(features);
  console.error("done creating featureCollection");
  return fc;
};

baseRegistryToGeoJson()
  .then((geoJson) => process.stdout.write(JSON.stringify(geoJson, null, 2)))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
