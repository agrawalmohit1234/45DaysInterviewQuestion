const optioncontainer = document.getElementById("optioncontainer");
const peoplevoted = document.getElementById("peoplevoted");

let num = 0;
let visible = [];
let d = { 1: 0, 2: 0, 3: 0, 4: 0 };
const showData = (n, id) => {
  for (let i = 1; i <= 4; i++) {
    let ele = document.getElementById(`${i}color`);
    let eleW = document.getElementById(`${i}white`);
    let totaldata = document.getElementById(`${i}total`);
    eleW.style.height = `${100 - (d[i] / n) * 100}%`;
    ele.style.height = `${(d[i] / n) * 100}%`;
    ele.style.backgroundColor = "red";
    eleW.style.backgroundColor = "white";
    totaldata.innerHTML = d[i];
  }
};

optioncontainer.addEventListener("click", (event) => {
  num += 1;
  peoplevoted.innerHTML = num;
  if (visible.length >= 1) {
    document.getElementById(`${visible[0]}`).style.backgroundColor = "white";
    visible.pop();
  }
  document.getElementById(`${event.target.id}`).style.backgroundColor =
    "bisque";
  visible.push(event.target.id);
  d[event.target.id] += 1;
  showData(num, event.target.id);
});
