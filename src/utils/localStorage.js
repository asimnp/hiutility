export function setItem(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key) {
  const item = window.localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}
