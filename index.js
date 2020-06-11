function jsonToCsv(json) {
  const datos = Object.values(json);
  return datos;
}

module.exports = jsonToCsv;