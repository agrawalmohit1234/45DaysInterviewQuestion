const myPromiseAllSettled = (task) => {
  const result = [];
  let totalpromiseresolved = 0;
  return new Promise((resolve, reject) => {
    task.forEach((promise, ind) => {
      promise
        .then((val) => {
          result[ind] = { status: "fulfilled", value: val };
          totalpromiseresolved += 1;
          if (totalpromiseresolved === task.length) {
            resolve(result);
          }
        })
        .catch((val) => {
          result[ind] = { status: "rejected", reason: val };
          totalpromiseresolved += 1;
          if (totalpromiseresolved === task.length) {
            resolve(result);
          }
        });
    });
  });
};

const asyncTask = (time) => {
  return new Promise((resolve, reject) => {
    if (time < 3) {
      setTimeout(() => {
        resolve(`Completed in ${time}`);
      }, 1000 * time);
    } else {
      reject("Rejected");
    }
  });
};

const task = [
  asyncTask(2),
  asyncTask(5),
  asyncTask(1),
  asyncTask(3),
  asyncTask(4),
];

const promise = myPromiseAllSettled(task); // Promise.allSettled or myPromiseAllSettled both return same result.

promise
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log("Error", err);
  });
