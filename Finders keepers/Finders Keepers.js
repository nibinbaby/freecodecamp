
function findElement(arr, func) {
  var num = 0;
  var result = arr.filter(func);
  return result[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });