function steamrollArray(arr) {
    let result = [];
  
    const test  = (item) => {
      if(!Array.isArray(item)) {
        result.push(item);
      } else {
        item.forEach((item) => {
          test(item);
        });
      }
  
    };
  
    test(arr);
  
    console.log(result);
  
    return result;
  
  }
  
  steamrollArray([1, {}, [3, [[4]]]]);
  