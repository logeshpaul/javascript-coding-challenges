// ES5 approach

var array = [1, 2, [3, 4, [5, [6]]], 7, 0];

function flatten(arr) {
  return arr.reduce(function(flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

// ES6 approach

var array = [1, 2, [3, 4, [5, [6]]], 7, 0];

const flatArray = arr => arr.reduce((flat, next) => flat.concat(Array.isArray(next) ? flatArray(next) : next), []);
