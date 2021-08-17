export function createOption(item) {
  return { label: item.description, value: item.id };
}

export function getCurrentOption(items, id) {
  const currentItem = items.find((item) => item.id === id);
  if (!currentItem) {
    return {};
  }
  return createOption(currentItem);
}
