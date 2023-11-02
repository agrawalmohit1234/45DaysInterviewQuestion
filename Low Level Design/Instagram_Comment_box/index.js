const input = document.getElementById("input");
const content = document.getElementById("content");
const buttomImage = document.getElementById("buttomImage");

const emoji = [
  "😄",
  "😍",
  "🥰",
  "😎",
  "🥸",
  "😢",
  "😭",
  "😮‍💨",
  "😂",
  "🤣",
  "🥲",
];
let num = 0;
let totalcomment = {};

const itempressed = (num) => {
  let key = window.event.keyCode;
  if (key === 13) {
    const ele = document.getElementById(`text${num}`);
    const replybox = document.getElementById(`replybox${num}`);
    replybox.innerHTML = "";
    totalcomment[num] = !totalcomment[num];
    const replytext = document.getElementById(`val${num}`);
    replytext.innerHTML += `<div class="commentofcomment">${ele.value}</div>`;
    ele.value = "";
  }
};

const itemClicked = (num) => {
  if (totalcomment[num]) {
    const replybox = document.getElementById(`replybox${num}`);
    replybox.innerHTML = `<div>
                    <textarea placeholder="Comments..." cols="3" id="text${num}" class="textareaC" onKeyDown="itempressed('${num}')"></textarea>
                </div>`;
  } else {
    const replybox = document.getElementById(`replybox${num}`);
    replybox.innerHTML = "";
  }
  totalcomment[num] = !totalcomment[num];
};

input.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    content.innerHTML += `<div class="commentcontainer">
                            <div><img src="avataar.jpg" class="profile"/></div>
                            <div>
                              <div class="text">Mohit Agrawal</div>
                              <div class="comment">${input.value}</div>
                              <div class="reply" onclick="itemClicked('${num}')">reply</div>
                            </div>
                          </div><div id="replybox${num}"></div><div id="val${num}"></div>`;
    input.value = "";
    totalcomment[num] = true;
    num += 1;
  }
});

buttomImage.addEventListener("click", (e) => {
  input.value = emoji[e.target.id - 1];
});
