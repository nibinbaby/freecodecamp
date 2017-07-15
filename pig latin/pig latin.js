
function translatePigLatin(str) {
  
  var regex = /[aeiou]/gi;
  var arr=[];
  if(str[0].match(regex)){
    str+= 'way';
  }else{
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    str = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }
  return str;
}

translatePigLatin("consonant");
