export function stationValidator(data) {
  if (!data) {
    return { isOk: false, error: 'no data' };
  }
  const { name, abbrev } = data;
  if (!name || name.length < 1) {
    return { isOk: false, error: 'bad name' };
  }

  if (!abbrev || abbrev.length !== 4) {
    return { isOk: false, error: 'bad abbrev' };
  }
  return { isOk: true };
}
