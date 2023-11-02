const btn = document.getElementById("btn");
const calender = document.getElementById("calender");

let opened = false;
let month = "January";
let year = 1970;
let day = 1;
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const years = Array.from({ length: 54 }, (_, i) => 1970 + i);

const dayCall = (d) => {
  day = d;
  btn.innerHTML = `${day}-${month}-${year}`;
  calender.innerHTML = "";
  opened = false;
};

const monthCall = (m) => {
  month = m;
  btn.innerHTML = `${day}-${month}-${year}`;
};

const yearCall = (y) => {
  year = y;
  btn.innerHTML = `${day}-${month}-${year}`;
};

btn.addEventListener("click", () => {
  let d = "";
  for (let i = 0; i < days.length; i++) {
    d += `<span class="day" onclick="dayCall('${days[i]}')">${days[i]}</span>`;
  }

  let m = "";
  for (let i = 0; i < months.length; i++) {
    m += `<option value='${months[i]}'>${months[i]}</option>`;
  }

  let y = "";
  for (let i = 0; i < years.length; i++) {
    y += `<option value='${years[i]}'>${years[i]}</option>`;
  }
  if (!opened) {
    opened = true;
    calender.innerHTML = `
    <div class="month-year">
        <div><select id="month" class="month-select" onclick="monthCall(this.value)">${m}</select></div>
        <div><select id="year" onclick="yearCall(this.value)">${y}</select></div>
    </div>
    <div class="alldays">${d}</div>`;
    calender.style.position = "fixed";
    calender.style.top =
      btn.getBoundingClientRect().top +
      btn.getBoundingClientRect().height +
      "px";
    calender.style.left = btn.getBoundingClientRect().left + "px";
  } else {
    opened = false;
    calender.innerHTML = "";
  }
});
