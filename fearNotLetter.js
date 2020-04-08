function fearNotLetter(str) {
    let template = 'abcdefghijklmnopqrstuvwxyz';
  
    for(let s in str) {
      if (s == 0) {
        continue;
      } 
      let previousIndex = template.indexOf(str[s-1]);
      if(template[previousIndex+1] != str[s]) {
        
        return template[previousIndex+1];
      }
    }
  
    return;
  }
  
  console.log(fearNotLetter("abce"));
  