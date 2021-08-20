export function createOption(item, labelField) {
  return { label: item[labelField], value: item.id };
}

export function getCurrentOption(items, id, labelField) {
  const currentItem = items.find((item) => item.id === id);
  if (!currentItem) {
    return {};
  }
  return createOption(currentItem, labelField);
}

export function formatDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month.length < 2 ? '0' : ''}${month}-${day}`;
}

function pullTime(total, unit) {
  if (total > unit - 1) {
    const overflow = total % unit;
    const trackedTime = total - overflow;
    return { tracked: trackedTime / unit, untracked: overflow };
  }
  return { tracked: 0, untracked: total };
}

export function hmsToSeconds(hms) {
  if (!hms || isNaN(hms.h) || isNaN(hms.m) || isNaN(hms.s)) {
    return NaN;
  }

  return hms.h * 3600 + hms.m * 60 + hms.s;
}

export function secondsToHMS(time) {
  let untrackedTime = time;

  const pulledHours = pullTime(untrackedTime, 3600);
  const h = pulledHours.tracked;
  untrackedTime = pulledHours.untracked;

  const pulledMinutes = pullTime(untrackedTime, 60);
  const m = pulledMinutes.tracked;
  const s = pulledMinutes.untracked;
  return { h, m, s };
}

export function sortByOrder(array) {
  array.sort((a, b) => (a.order > b.order ? 1 : -1));
}
