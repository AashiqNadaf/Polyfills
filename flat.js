if (!Array.prototype.flat) {
  Array.prototype.flat = function(depth) {
    var result = [];
    var depth = depth === undefined ? 1 : depth;

    (function flatDeep(arr, d) {
      for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && d > 0) {
          flatDeep(arr[i], d - 1);
        } else {
          result.push(arr[i]);
        }
      }
    })(this, depth);

    return result;
  };
}
