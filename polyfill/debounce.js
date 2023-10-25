function debounce(cb, delay) {
  let timeout;

  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(cb, delay);
  };
}
