const clock = document.getElementById("clock");
const second = document.getElementById("second");
const minute = document.getElementById("minute");

document.addEventListener("DOMContentLoaded", () => {
  interval1 = setInterval(() => {
    second.style.transformOrigin = "0 0";
    second.style.transform += "rotate(30deg)";
  }, 1000);

  interval2 = setInterval(() => {
    minute.style.transformOrigin = "0 0";
    minute.style.transform += "rotate(30deg)";
  }, 60000);

  return () => {
    clearInterval(interval1);
    clearInterval(interval2);
  };
});
