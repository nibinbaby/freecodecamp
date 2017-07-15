
function steamrollArray(arr) {
  // I'm a steamroller, baby
  var result = [];
  var flatten = function(arg){
    
    if(Array.isArray(arg)){
      for(var a in arg){
        flatten(arg[a]);
      }
    }else{
      result.push(arg);
    }
  };
  arr.forEach(flatten);
  return result;
}

steamrollArray([1, [2], [3, [[4]]]]);
