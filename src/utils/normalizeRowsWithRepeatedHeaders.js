export const normalizeRowsWithRepeatedHeaders = (rows) => {
  if (!rows.length) return [];

  const headers = rows[0];

  return rows.slice(1).map(row => {
    const result = {};
    const grouped = {};

    headers.forEach((header, index) => {
      const value = row[index] ?? "";

      if (grouped[header]) {
        grouped[header].push(value);
      } else {
        grouped[header] = [value];
      }
    });

    Object.keys(grouped).forEach(key => {
      result[key] =
        grouped[key].length === 1 ? grouped[key][0] : grouped[key];
    });

    return result;
  });
};