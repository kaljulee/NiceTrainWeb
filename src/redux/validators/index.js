export function stringIsOk(value) {
  return !!value && value.length > 0;
}

export function stationValidator(data) {
  if (!data) {
    return { isOk: false, error: 'no data' };
  }
  const { name, abbrev } = data;
  if (!stringIsOk(name)) {
    return { isOk: false, error: 'bad name' };
  }

  if (!abbrev || abbrev.length !== 4) {
    return { isOk: false, error: 'bad abbrev' };
  }
  return { isOk: true };
}

export function youTubeResourceValidator(data) {
  if (!data) {
    return { isOk: false, error: 'no data' };
  }
  const { description, link } = data;
  if (!stringIsOk(description)) {
    return { isOk: false, error: 'bad description' };
  }
  if (!stringIsOk(link)) {
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
  if (!stringIsOk(data.name)) {
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
