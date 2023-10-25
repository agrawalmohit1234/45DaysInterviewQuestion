const myPromiseRace = (task) => {
  return new Promise((resolve, reject) => {
    task.forEach((promise) => {
      promise
        .then((val) => {
          resolve(val);
        })
        .catch((err) => {
          reject(err);
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
  asyncTask(1),
  asyncTask(5),
  asyncTask(3),
  asyncTask(4),
];

const promise = myPromiseRace(task); // Promise.race or myPromiseRace both return same result.

promise
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log("Error", err);
  });
