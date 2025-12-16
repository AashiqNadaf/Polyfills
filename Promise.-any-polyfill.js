if (!Promise.any) {
  Promise.any = function (promises) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        reject(new TypeError("Argument must be an iterable"));
        return;
      }

      const errors = [];
      let rejectedCount = 0;
      const total = promises.length;

      if (total === 0) {
        reject(new AggregateError([], "All promises were rejected"));
        return;
      }

      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then(resolve) // FIRST success wins
          .catch((err) => {
            errors[index] = err;
            rejectedCount++;

            if (rejectedCount === total) {
              reject(new AggregateError(errors, "All promises were rejected"));
            }
          });
      });
    });
  };
}
