Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Argument must be an array"));
    }

    const results = [];
    let completed = 0;

    // If array is empty → resolve immediately
    if (promises.length === 0) {
      return resolve([]);
    }

    promises.forEach((p, index) => {
      // Convert any value to a Promise
      Promise.resolve(p)
        .then((value) => {
          results[index] = value;
          completed++;

          // When all are completed → resolve
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          // If ANY promise fails → reject immediately
          reject(err);
        });
    });
  });
};

