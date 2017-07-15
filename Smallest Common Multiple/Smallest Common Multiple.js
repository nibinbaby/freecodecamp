
function smallestCommons(arr) {
      //if no arguments, return 0
  if (!arr) {
    return 0;
  }
var min,max,r,next,first,lcm,gcd;
  //find the largest argument
  if (arr[1] > arr[0]) {
     min = Number(arr[0]);
     max = Number(arr[1]);
  } else {
     min = Number(arr[1]);
     max = Number(arr[0]);
  }

  //Calculate the Greatest Common Divisor
  function calcGcd(first, next) {

    //Eculidean algorithm
    while (r!== 0) {
       r = next % first;
       next = first;
       first = r;
       gcd = next;
    }
  }

  //calculate the Least Common Multiple for all numbers in the range of the first and second arguments.
   lcm = min;

  for(var i=min;i<max;i++) {
     first = lcm;
     next = (i+1);
     calcGcd(first, next);
     lcm = ((first*next)/gcd);
  }
  return lcm;
}


smallestCommons([1,5]);
