if (!Promise.race) {
  Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        throw new TypeError("Argument must be an iterable");
      }

      for (let i = 0; i < promises.length; i++) {
        Promise.resolve(promises[i])
          .then(resolve)
          .catch(reject);
      }
    });
  };
}
