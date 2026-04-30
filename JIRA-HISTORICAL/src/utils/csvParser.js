import Papa from "papaparse"

export const parseCSV = (file, callback) => {
  Papa.parse(file, {
    header: true, //false
    skipEmptyLines: true,
    worker: true,
    complete: (results) => {
      callback(results.data);
    },
  })};