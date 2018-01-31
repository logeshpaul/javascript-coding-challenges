/**
 * @param {String} j
 * @param {String} s
 * @return {Integer}
 */
var numJewelsInStones = function(J, S) {
  // edge cases
  if(J.length, S.length === 0) {
      return "Invalid input";
  }

  let counter = 0;
  for(var i=0; i < S.length; i++) {
      if(J.includes(S[i])) {
          counter++;
      }
  }

  return counter;
};

numJewelsInStones("aA", "aAAbbbb");