function uniteUnique(arr) {
    let result = [];
    for(let s in arguments) {
      result = result.concat(arguments[s]);
    }
    let temp = [];
  
    result = result.filter((x) => {
      let isExist = temp.indexOf(x) == -1;
      if(isExist) {
        temp.push(x);
      }
      return isExist;
    });
  
  
    return result;
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));