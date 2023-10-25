//----------------------------------------------------------------MAP------------------------------------------------
Array.prototype.mapFunction = function (callback) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i], i));
  }
  return res;
};

let mapArr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(mapArr.mapFunction((x) => x * 2));

let mapArr1 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(
  mapArr1.mapFunction((x, id) => {
    if (id % 2 == 0) {
      x *= 2;
    }
    return x;
  })
);

//-----------------------------------------------------------FILTER--------------------------------------------------
Array.prototype.filterFunction = function (callback) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    callback(this[i]) ? res.push(this[i]) : null;
  }
  return res;
};

let filterArr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(filterArr.filterFunction((x) => x % 2 == 0));

//----------------------------------------------------------REDUCE----------------------------------------------------
Array.prototype.reduceFunction = function (callback, initial = this[0]) {
  for (let i = initial == this[0] ? 1 : 0; i < this.length; i++) {
    initial = callback(initial, this[i]);
  }
  return initial;
};

let reduceArr = [2, 3, 4, 6, 7, 8, 9, 5];
console.log(
  reduceArr.reduceFunction((acc, curr) => {
    acc += curr;
    return acc;
  }, 0)
);

console.log(
  reduceArr.reduceFunction((acc, curr) => {
    acc *= curr;
    return acc;
  }, 1)
);

console.log(
  reduceArr.reduceFunction((acc, curr) => {
    acc += curr;
    return acc;
  })
);

console.log(
  reduceArr.reduceFunction((acc, curr) => {
    acc *= curr;
    return acc;
  })
);
