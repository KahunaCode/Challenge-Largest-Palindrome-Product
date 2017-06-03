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

  var toTest = "";

  if(digits ===2){
    toTest = 9999;
  }

  if(digits === 3){
    toTest = 998001;
  }


  function isPalindrome(test){
    if (digits ==2 ){
      test1 = test.slice(0,2);
      test2 = test.slice(2,4);
    }
    if (digits === 3){
      test1 = test.slice(0,3);
      test2 = test.slice(3,6);
    }

    //test2 = test2.slice(1) + test2.slice(0,1);
    //console.log("test2 is "+ test2);
    var flip = "";
    for (var i = test2.length; i >=0; i--){
      flip+= test2.slice(i,i+1);
    }
    //console.log("flip is " + flip);

    if (test1 === flip){
      return true;
    }
    else {
      return false;
    }
  }

  function factors(){
    var testNum;
    if (digits === 2){
      testNum = 99;
    }
    if (digits === 3){
      testNum = 999;
    }
    if (Number.isInteger(toTest/testNum)) {
      factor_0 = toTest/testNum;
      factor_1 = testNum;
      return true;

    }
    else {
      testNum--;
    }
  }

var test1;
var test2;

  for (var i = toTest; i>=9005; i--){
    toTest = i.toString();

    //console.log(test1, test2);
    if (isPalindrome(toTest)) {
      //console.log("totest is " +toTest);
      if (factors()) {
        palindromeNumber = i;
        console.log(palindromeNumber);
      }
    }
  }


  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};




