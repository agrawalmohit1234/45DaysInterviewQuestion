Function.prototype.myCall = function (obj, ...args) {
  obj.myFn = this;
  return obj.myFn(...args);
};

Function.prototype.myApply = function (obj, args) {
  obj.myFn = this;
  return obj.myFn(...args);
};

Function.prototype.myBind = function (obj, ...args) {
  let myFn = this;
  return function () {
    return myFn.call(obj, ...args);
  };
};

function welcomeNote(salutation, country) {
  return `${this.name}, ${salutation} to ${country}!`;
}

let obj = {
  name: "Mohit",
};

console.log(welcomeNote.myCall(obj, "Welcome", "India"));
console.log(welcomeNote.myApply(obj, ["Welcome", "India"]));
let bindFunc = welcomeNote.myBind(obj, "Welcome", "India");
console.log(bindFunc());
