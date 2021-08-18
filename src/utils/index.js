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
