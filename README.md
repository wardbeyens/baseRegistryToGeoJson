# Accommodation Base_Registry to GeoJSON Converter
[![Auto update base_registry geojson](https://github.com/wardbeyens/baseRegistryToGeoJson/actions/workflows/update.yml/badge.svg)](https://github.com/wardbeyens/baseRegistryToGeoJson/actions/workflows/update.yml)

This code is a Node.js script that retrieves data from the Accommodation Base Registry of Visit Flanders and converts it into a GeoJSON file. The data is fetched from a CSV file, processed, and transformed into a GeoJSON object with the type "FeatureCollection".

## Prerequisites

To run this code, ensure that you have the following:

- Node.js installed on your machine.
- Internet connectivity to fetch the data from the provided URL.

## Installation

1. Clone the repository or download the code files:

   ```
   git clone https://github.com/wardbeyens/baseRegistryToGeoJson
   ```

2. Navigate to the project directory:

   ```
   cd ./baseRegistryToGeoJson
   ```

3. Install the required dependencies:

   ```
   npm install
   ```

## Usage

1. Open the code file `index.js`.

2. Run the application using the Node.js runtime:

   ```
   node index.js
   ```

3. The application will start fetching the data from the Visit Flanders Accommodation Base Registry CSV file.

4. Once the data is fetched, the application will process and transform it into a GeoJSON file.

5. The GeoJSON file will be printed to the console as a JSON string with a formatted structure.

6. You can redirect the output to a file by using the following command:

   ```
   node index.js > output.geojson
   ```

   This will save the GeoJSON data to a file named `output.geojson`.

## Data Information

The Accommodation Base Registry data consists of approximately 27,000 accommodations. Each accommodation entry contains various attributes such as the business product ID, product type, location coordinates, contact details, and more.

Here are two example entries from the dataset:

```json
{
  "business_product_id": "392187",
  "product_type": "BASE",
  "parent_product_ids": "",
  "name": "Akropolis II",
  "name_or_number": "Studio",
  "discriminator": "HOLIDAY_COTTAGE",
  "street": "Europaplein",
  "house_number": "6",
  "box_number": "0302",
  "postal_code": "8670",
  "main_city_name": "Koksijde",
  "x": "31508.99",
  "y": "203978.89",
  "lat": "51.13371848479277",
  "long": "2.67577899104129",
  "distance": "",
  "promotional_region": "kust",
  "changed_time": "2022-12-08 14:24:07",
  "last_status_change_date": "2022-01-16 00:00:00",
  "phone1": "0473643273",
  "phone2": "",
  "phone3": "",
  "email": "veva.reyntjens@telenet.be",
  "website": "http://www.Airbnb.be",
  "status": "NOTIFIED",
  "comfort_class": "",
  "number_of_units": "1",
  "maximum_capacity": "2",
  "number_of_short_term_camping_spots": "",
  "number_of_touristic_camping_spots": "",
  "number_of_camper_stands": "",
  "number_of_camping_spots": "",
  "number_of_residence_units": "",
  "number_of_long_term_camping_spots": "",
  "number_of_residence_units_for_rental": "",
  "number_of_hikers_huts": ""
},
{
  "business_product_id": "345682",
  "product_type": "BASE",
  "parent_product_ids": "",
  "name": "AKROPOLIS II 0604",
  "name_or_number": "AKROPOLIS II 0604",
  "discriminator": "HOLIDAY_COTTAGE",
  "street": "EUROPAPLEIN",
  "house_number": "6",
  "box_number": "",
  "postal_code": "8670",
  "main_city_name": "Koksijde",
  "x": "31508.99",
  "y": "203978.89",
  "lat": "51.13371848479277",
  "long": "2.67577899104129",
  "distance": "",
  "promotional_region": "kust",
  "changed_time": "2023-02-16 09:22:19",
  "last_status_change_date": "2017-08-11 00:00:00",
  "phone1": "",
  "phone2": "",
  "phone3": "",
  "email": "",
  "website": "",
  "status": "NOTIFIED",
  "comfort_class": "",
  "number_of_units": "1",
  "maximum_capacity": "4",
  "number_of_short_term_camping_spots": "",
  "number_of_touristic_camping_spots": "",
  "number_of_camper_stands": "",
  "number_of_camping_spots": "",
  "number_of_residence_units": "",
  "number_of_long_term_camping_spots": "",
  "number_of_residence_units_for_rental": "",
  "number_of_hikers_huts": ""
}
```

## Output

The code will convert the Accommodation Base Registry data into a GeoJSON file. The resulting GeoJSON structure will represent the accommodations as a collection of geographic features, with each feature representing an individual accommodation. The feature properties will contain the attributes of each accommodation entry.

The generated GeoJSON data will be printed to the console as a JSON string with a formatted structure. You can redirect the output to a file as mentioned in the "Usage" section to save the GeoJSON data to a file for further analysis or integration with other systems.

## Libraries Used

The code utilizes the following external libraries:

- `csvtojson`: A library for converting CSV data to JSON format.
- `axios`: A library for making HTTP requests to fetch the CSV data.
- `@turf/turf`: A library for working with GeoJSON data and performing geospatial operations.

## Attribution

The data used in this code is sourced from the Visit Flanders Accommodation Base Registry. The original data can be accessed at the following URL: [https://opendata.visitflanders.org/sector/accommodation/base_registry](https://opendata.visitflanders.org/sector/accommodation/base_registry)

Please refer to the Visit Flanders Open Data portal for any licensing or usage restrictions regarding the data.

## License

This code is provided under the [MIT License](LICENSE). Feel free to modify and use it according to your needs.
