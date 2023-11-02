const search = document.getElementById("search");
const result = document.getElementById("result");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const prevnext = document.getElementById("prevnext");

let cnt = 0;
let currNum = 0;

search.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    currNum = 10;
    cnt = 0;
    let txt = e.target.value;
    prev.disabled = true;
    if (txt.length === 0) {
      prev.style.visibility = "hidden";
      next.style.visibility = "hidden";
    } else {
      prev.style.visibility = "visible";
      next.style.visibility = "visible";
    }
    let url = `https://api.giphy.com/v1/gifs/search?api_key=Ai0K5Np0geAPo3dU30hPEl5uxXmjZ5qC&q=${txt}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let v = "";
        data.data.map((x) => {
          v += `<span class="box"><img class="img" src='${x.images.original.url}' /><div class="imgHeading">${x.title}</div><div class="button"><button onclick="window.open('${x.url}')">See on Giphy</button></div></span>`;
        });
        result.innerHTML = `<div class="container">${v}</div>`;
      });
  }
});

prev.addEventListener("click", () => {
  cnt -= 1;
  currNum -= 10;
  const search = document.getElementById("search");
  let url = `https://api.giphy.com/v1/gifs/search?api_key=Ai0K5Np0geAPo3dU30hPEl5uxXmjZ5qC&q=${search.value}&limit=${currNum}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let v = "";
      let totalData = data.data;
      if (currNum >= 20) {
        totalData = totalData.slice(totalData.length - 10, totalData.length);
      }
      totalData.map((x) => {
        v += `<span class="box"><img class="img" src='${x.images.original.url}' /><div class="imgHeading">${x.title}</div><div class="button"><button onclick="window.open('${x.url}')">See on Giphy</button></div></span>`;
      });
      result.innerHTML = `<div class="container">${v}</div>`;
    });
  if (cnt === 0) {
    prev.disabled = true;
  } else {
    prev.disabled = false;
  }
});

next.addEventListener("click", () => {
  cnt += 1;
  currNum += 10;
  const search = document.getElementById("search");
  let url = `https://api.giphy.com/v1/gifs/search?api_key=Ai0K5Np0geAPo3dU30hPEl5uxXmjZ5qC&q=${search.value}&limit=${currNum}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let v = "";
      let totalData = data.data;
      if (currNum >= 20) {
        totalData = totalData.slice(totalData.length - 10, totalData.length);
      }
      totalData.map((x) => {
        v += `<span class="box"><img class="img" src='${x.images.original.url}' /><div class="imgHeading">${x.title}</div><div class="button"><button onclick="window.open('${x.url}')">See on Giphy</button></div></span>`;
      });
      result.innerHTML = `<div class="container">${v}</div>`;
    });
  if (cnt === 0) {
    prev.disabled = true;
  } else {
    prev.disabled = false;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  prev.disabled = true;
  prev.style.visibility = "hidden";
  next.style.visibility = "hidden";
});
