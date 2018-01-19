/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var anagramMappings = function(A, B) {
  // Edge cases
  if ((A.length && B.length === 0) || (A.length && B.length === 1)) {
    return "Invalid array input";
  }

  var mappings = [];
  A.forEach(item => mappings.push(B.indexOf(item)));
  return mappings;
};

anagramMappings([12, 28, 46, 32, 50], [50, 12, 32, 46, 28]);
