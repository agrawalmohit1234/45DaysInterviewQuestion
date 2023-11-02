const input_val = document.getElementById("input_val");
const result = document.getElementById("result");

var arr = [];

const addNote = (arr) => {
  let v = "";
  for (let i = 0; i < arr.length; i++) {
    v += `<i class="fa fa-trash trash" id="trash" onclick="deleteNote('${i}')" aria-hidden="true"></i><div class="note">${arr[i]}</div>`;
  }
  result.innerHTML = `<div class="allNote">${v}</div>`;
};

const deleteNote = (id) => {
  arr.splice(id, 1);
  addNote(arr);
};

input_val.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    arr.push(e.target.value);
    input_val.value = "";
    addNote(arr);
  }
});