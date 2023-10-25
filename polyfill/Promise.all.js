const myPromiseAll = (task) => {
  const result = [];
  let totalpromiseresolved = 0;
  return new Promise((resolve, reject) => {
    task.forEach((promise, ind) => {
      promise
        .then((val) => {
          result[ind] = val;
          totalpromiseresolved += 1;
          if (totalpromiseresolved === task.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

const asyncTask = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Completed in ${time}`);
    }, 1000 * time);
  });
};

// Uncomment this below asyncTask if you want to play with resolve and reject both and also comment the above asyncTask.
// const asyncTask = (time) => {
//   return new Promise((resolve, reject) => {
//     if (time < 3) {
//       setTimeout(() => {
//         resolve(`Completed in ${time}`);
//       }, 1000 * time);
//     } else {
//       reject("Rejected");
//     }
//   });
// };

const task = [
  asyncTask(2),
  asyncTask(5),
  asyncTask(1),
  asyncTask(3),
  asyncTask(4),
];

const promise = myPromiseAll(task); // Promise.all or myPromiseAll both return same result.

promise
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });
