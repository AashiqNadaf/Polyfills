if (!Promise.allSettled) {
  Promise.allSettled = function (promises) {
    return new Promise((resolve) => {
      if (!Array.isArray(promises)) {
        throw new TypeError("Argument must be an iterable");
      }

      const results = [];
      let completed = 0;

      if (promises.length === 0) {
        resolve([]);
        return;
      }

      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then((value) => {
            results[index] = {
              status: "fulfilled",
              value
            };
          })
          .catch((reason) => {
            results[index] = {
              status: "rejected",
              reason
            };
          })
          .finally(() => {
            completed++;
            if (completed === promises.length) {
              resolve(results);
            }
          });
      });
    });
  };
}
