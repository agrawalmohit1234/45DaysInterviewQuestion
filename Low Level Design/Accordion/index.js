const heading_title = document.getElementById("heading_title");
const accordion = document.getElementById("accordion");

let opened_arr;
const itemClicked = (e, data) => {
  const id = String(e) + String(e);
  const content = document.getElementById(id);
  content.style.backgroundColor = "aquamarine";
  content.style.padding = "4px";
  if (!opened_arr[e]) {
    content.innerHTML = data;
  } else {
    content.innerHTML = "";
    content.removeAttribute("style");
  }
  if (opened_arr[e]) {
    opened_arr[e] = false;
  } else {
    opened_arr[e] = true;
  }
};

document.addEventListener("DOMContentLoaded", (e) => {
  let t = e.target.body.childNodes[1].attributes.heading_title.value;
  t = t.slice(1, t.length - 1);
  var title = t.split("', '");
  let d = e.target.body.childNodes[1].attributes.data.value;
  d = d.slice(1, d.length - 1);
  var data = d.split("', '");
  let val = "";
  opened_arr = Array.from({ length: title.length }, () => false);
  console.log(opened_arr);
  for (let i = 0; i < title.length; i++) {
    val += `<div>
        <div class="heading" id='${i}' value='${data[i]}' onclick="itemClicked(this.id, '${data[i]}')" type="button">
            <div>${title[i]}</div>
            <div class="plus">+</div>
        </div>
        <div id='${i}${i}'></div>
    </div>`;
  }
  accordion.innerHTML = val;
});
