import { USER_STATES } from '../constants';

export function createOption(item, labelField) {
  if (!item) return undefined;
  return { label: item[labelField], value: item.id };
}

export function mapToOptions(items, labelField) {
  // check if items list exists,
  // if there are more than zero items,
  // or the first item does not contain the field
  if (!items || items.length < 1 || !items[0][labelField]) {
    return [{ label: 'no options', value: -1 }];
  }
  return items.map((i) => createOption(i, labelField));
}

export function getCurrentOption(items = [], id, labelField) {
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
  return `${year}-${month < 10 ? '0' : ''}${month}-${
    day < 10 ? '0' : ''
  }${day}`;
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

export function hmsFieldToDisplay(field) {
  if (!field) {
    return '00';
  }
  const stringField = field.toString();
  return `${stringField.length < 2 ? '0' : ''}${field}`;
}

export function hmsToDisplay(hmsObject) {
  return `${hmsFieldToDisplay(hmsObject.h)} : ${hmsFieldToDisplay(
    hmsObject.m
  )} : ${hmsFieldToDisplay(hmsObject.s)}`;
}

export function secondsToDisplay(seconds) {
  const hmsObject = secondsToHMS(seconds);
  return hmsToDisplay(hmsObject);
}

export function sortByOrder(array) {
  array.sort((a, b) => (a.order > b.order ? 1 : -1));
}

export function checkZero(num) {
  return `${num.length > 1 ? '' : '0'}${num}`;
}

export function percentStandOff(count) {
  if (!count) {
    return 0;
  }
  return Math.floor(100 / count);
}

export const HMS_ZERO = {
  h: 0,
  m: 0,
  s: 0
};

export function calculateLoginStatus(user, authState) {
  if (!user || !user.signInUserSession) {
    return USER_STATES.UNAUTH;
  }
  const groups = user.signInUserSession.accessToken.payload['cognito:groups'];
  if (!groups) {
    return USER_STATES.GUEST;
  }
  if (groups.findIndex((d) => d === 'ntadmin') !== -1) {
    return USER_STATES.ADMIN;
  }
  return USER_STATES.GUEST;
}

export function flattenScheduledActivites(sActivities) {
  const keys = Object.keys(sActivities);
  return keys.reduce((acc, k) => acc.concat(sActivities[k]), []);
}

export function videoIDRegex(url) {
  const regExp =
    // eslint-disable-next-line no-useless-escape
    /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length === 11) {
    return match[2];
  }
  return undefined;
}
