const radio1 = document.getElementById("1");
const radio2 = document.getElementById("2");
const radio3 = document.getElementById("3");
const radio4 = document.getElementById("4");
const radio5 = document.getElementById("5");
const rating = document.getElementById("rating");
const formid = document.getElementById("formid");

const implementRating = (id) => {
  radio1.checked = 1 <= id;
  radio2.checked = 2 <= id;
  radio3.checked = 3 <= id;
  radio4.checked = 4 <= id;
  radio5.checked = 5 <= id;
  rating.innerHTML = `Thanks for giving ${id} star`;
};

formid.addEventListener("click", (e) => {
  if (e.target.id != "formid") {
    implementRating(e.target.id);
  }
});
