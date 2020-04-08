function translatePigLatin(str) {
    let re = /[aeiou]/;
    let startWithConsonant = str.search(re);
  
    if(startWithConsonant > 0) {
      str = str.slice(str.search(re),) + str.slice(0,str.search(re)) + 'ay'
    } else if (startWithConsonant == -1) {
      str+= 'ay';
    } else {
      str+= 'way';
    }
  
    console.log(str);
    return str;
  }
  
  translatePigLatin("rhythm");
  