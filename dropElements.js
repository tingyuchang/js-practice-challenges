function dropElements(arr, func) {

    let result = [];
  
    for(let s in arr) {
      if(func(arr[s])) {
        result = arr.slice(s);
        break;
      }
    }
  
    console.log(result);
    return result;
  }
  
  dropElements([0, 1, 0, 1], function(n) {return n === 1;});
  