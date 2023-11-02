const nav = document.getElementById("nav");
const nav_data = document.getElementById("nav_data");

let title;
let data;

function itemClicked(id) {
  nav_data.innerHTML = data[id];
  nav_data.style.position = "absolute";
  nav_data.style.top = nav_bar.getBoundingClientRect().height + 4 + "px";
}

document.addEventListener("DOMContentLoaded", (e) => {
  let t = e.target.body.childNodes[1].attributes.heading_title.value;
  t = t.slice(1, t.length - 1);
  title = t.split("', '");
  let d = e.target.body.childNodes[1].attributes.data.value;
  d = d.slice(1, d.length - 1);
  data = d.split("', '");
  let val = "";
  for (let i = 0; i < title.length; i++) {
    val += `<span class="title_ele" onclick="itemClicked('${i}')">${title[i]}</span>`;
  }
  nav.innerHTML = `<div id="nav_bar" class="heading">${val}</div>`;
  const nav_bar = document.getElementById("nav_bar");
  nav_data.innerHTML = data[0];
  nav_data.style.position = "absolute";
  nav_data.style.top = nav_bar.getBoundingClientRect().height + 4 + "px";
});
