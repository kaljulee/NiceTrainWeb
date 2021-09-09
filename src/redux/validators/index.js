export function stringIsOk(value) {
  return !!value && value.length > 0;
}

export function stationValidator(data) {
  if (!data) {
    return { isOk: false, error: 'no data' };
  }
  const { name, abbrev } = data;
  if (name !== undefined && !stringIsOk(name)) {
    return { isOk: false, error: 'bad name' };
  }

  const output = { isOk: true };
  if (abbrev !== undefined && (!abbrev || abbrev.length !== 4)) {
    return { isOk: false, error: 'bad abbrev' };
  }
  return output;
}

export function youTubeResourceValidator(data) {
  if (!data) {
    return { isOk: false, error: 'no data' };
  }
  const { description, link } = data;
  if (description !== undefined && !stringIsOk(description)) {
    return { isOk: false, error: 'bad description' };
  }
  if (link !== undefined && !stringIsOk(link)) {
    return { isOk: false, error: 'bad link' };
  }
  return { isOk: true };
}

export function activityValidator(data) {
  if (!data) {
    return { isOk: false, error: 'no data' };
  }
  return { isOk: true };
}

export function scheduledTrainValidator(data) {
  if (!data) {
    return { isOk: false, error: 'no data' };
  }
  if (!stringIsOk(data.description)) {
    return { isOk: false, error: 'bad description' };
  }
  if (!stringIsOk(data.stationID)) {
    return { isOk: false, error: 'bad station' };
  }
  return { isOk: true };
}

export function formatValidator(data) {
  if (!data) {
    return { isOk: false, error: 'no data' };
  }
  if (data.name !== undefined && !stringIsOk(data.name)) {
    return { isOk: false, error: 'bad name' };
  }
  return { isOk: true };
}

export function longMessageValidator(data) {
  if (!data) {
    return { isOk: false, error: 'no data' };
  }
  if (!stringIsOk(data.text)) {
    return { isOk: false, error: 'bad text' };
  }
  return { isOk: true };
}
