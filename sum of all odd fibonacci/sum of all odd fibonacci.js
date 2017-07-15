
function sumFibs(num) {
  var a=0,b=1,r=0,res=0;
  while(b<=num){
    if(b%2!==0){
      res+=b;
    }
    r=a+b;
    a=b;
    b=r;
    
  }
  
  return res;
}

sumFibs(4);
