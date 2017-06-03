/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  console.log("digits is "+digits);

  var toTest = 9999;


  function isPalindrome(test1, test2){
    test2 = test2.slice(1) + test2.slice(0,1);
    // var flip = "";
    // for (var i = test2.length; i >=0; i--){
    //   flip += test2.slice(i)
    // }
    if (test1 === test2){
      return true;
    }
    else {
      return false;
    }
  }

  function factors(num){
    var testNum = num;
    if (Number.isInteger(toTest/testNum)) {
      factor_0 = toTest/testNum;
      factor_1 = testNum;
      return true;

    }
    else {
      testNum--;
    }
  }

  for (var i = toTest; i>=9005; i--){
    toTest = i.toString();
    //console.log(i);
    var test1 = toTest.slice(0,2);
    var test2 = toTest.slice(2,4);
    console.log(test1, test2);
    if (isPalindrome(test1, test2)) {
      if (factors(99)) {
        palindromeNumber = i;
      }
    }
  }


  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};




