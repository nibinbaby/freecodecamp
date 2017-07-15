
function dropElements(arr, func) {
  for (var i=0; i<arr.length; i++) {

     if (func(arr[0])) {
       return arr;
     } else {
       arr.shift();
       i--;
     }

   }

  return arr;
}

dropElements([0, 1, 0, 1], function(n) {return n === 1;});
