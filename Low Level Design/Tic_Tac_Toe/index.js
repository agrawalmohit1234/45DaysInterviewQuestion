const main = document.getElementById("main");
const result = document.getElementById("result");

var arr = Array.from({ length: 3 }, () => ["", "", ""]);

const checkHorizontal = (arr) => {
  for (let i = 0; i < 3; i++) {
    let cnt_O = 0;
    let cnt_X = 0;
    for (let j = 0; j < 3; j++) {
      if (arr[i][j] == "O") {
        cnt_O += 1;
      } else if (arr[i][j] == "X") {
        cnt_X += 1;
      }
    }
    if (cnt_O === 3) {
      return [true, "O"];
    } else if (cnt_X === 3) {
      return [true, "X"];
    }
  }
  return [false, "O"];
};

const checkVerticle = (arr) => {
  for (let i = 0; i < 3; i++) {
    let cnt_O = 0;
    let cnt_X = 0;
    for (let j = 0; j < 3; j++) {
      if (arr[j][i] == "O") {
        cnt_O += 1;
      } else if (arr[j][i] == "X") {
        cnt_X += 1;
      }
    }
    if (cnt_O === 3) {
      return [true, "O"];
    } else if (cnt_X === 3) {
      return [true, "X"];
    }
  }
  return [false, "O"];
};

const checkDiagonal = (arr) => {
  let cnt_O = 0;
  let cnt_X = 0;
  for (let i = 0; i < 3; i++) {
    if (arr[i][i] == "O") {
      cnt_O += 1;
    } else if (arr[i][i] == "X") {
      cnt_X += 1;
    }
  }
  if (cnt_O === 3) {
    return [true, "O"];
  } else if (cnt_X === 3) {
    return [true, "X"];
  }
  let oppo_cnt_O = 0;
  let opp0_cnt_X = 0;
  for (let i = 0; i < 3; i++) {
    if (arr[i][2 - i] === "O") {
      oppo_cnt_O += 1;
    } else if (arr[i][2 - i] === "X") {
      opp0_cnt_X += 1;
    }
  }
  if (oppo_cnt_O === 3) {
    return [true, "O"];
  } else if (opp0_cnt_X === 3) {
    return [true, "X"];
  }
  return [false, "X"];
};

var d = {};
var num = 0;
const solve = (id) => {
  if (!d[id]) {
    if (num % 2 == 0) {
      arr[Math.floor(id / 3)][id % 3] = "O";
      var v1 = document.getElementById(`${id}`);
      v1.innerHTML = "O";
    } else {
      arr[Math.floor(id / 3)][id % 3] = "X";
      var v2 = document.getElementById(`${id}`);
      v2.innerHTML = "X";
    }
    num += 1;
  }
  d[id] = true;
  const res1 = checkVerticle(arr);
  if (res1[0] === true) {
    result.innerHTML = `The Player who has dice ${res1[1]} is the winner`;
    return;
  }
  const res2 = checkHorizontal(arr);
  if (res2[0] === true) {
    result.innerHTML = `The Player who has dice ${res2[1]} is the winner`;
    return;
  }
  const res3 = checkDiagonal(arr);
  if (res3[0] === true) {
    result.innerHTML = `The Player who has dice ${res3[1]} is the winner`;
    return;
  }
  if (num === 9) {
    result.innerHTML = "There is no winner please try again";
  }
};

main.addEventListener("click", (e) => {
  solve(e.target.id);
});
