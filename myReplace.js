function myReplace(str, before, after) {
    let checkUpperCase = /^[A-Z]/;
  
    if(checkUpperCase.test(before)) {
      after = after.replace(/^\w/, after[0].toUpperCase());
    } else {
      after = after.replace(/^\w/, after[0].toLowerCase());
    }
  
    console.log(after)
  
    var re = new RegExp(before,"g");
    str = str.replace(re, after)
    return str;
  }
  
  console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
  
  