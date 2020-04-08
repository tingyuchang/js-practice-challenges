function sumFibs(num) {

    var a = 1, b = 0, temp;
  
    let result = [];
    let tempNum = num;
  
    while (tempNum >= 0){
      temp = a;
      a = a + b;
      b = temp;
      result.push(temp);
      tempNum--;
    }
  
    // if(num <=1) {
    //   return 1;
    // } else {
    //   return sumFibs(num-1)+sumFibs(num - 2);
    // }
  
    return result.filter(x => (x%2 == 1 && x <= num)).reduce((a,b) => a+b);
  }
  
  console.log(sumFibs(75025));
  