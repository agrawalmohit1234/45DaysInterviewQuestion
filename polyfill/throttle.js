function throttle(cb, delay) {
  let throttlePause;

  return function (e) {
    if (throttlePause) return;
    throttlePause = true;

    setTimeout(() => {
      cb(e);
      throttlePause = false;
    }, delay);
  };
}
