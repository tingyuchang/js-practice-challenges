function sumPrimes(num) {
    let primes = [];
  
    for(let i = 2; i <= num; i ++) {
      let flag = true;
      for(let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
        if(i%j == 0) {
          flag = false;
          break;
        }
      }
      if(flag) {
        primes.push(i);
      }
    }
  
    console.log(primes);
  
    return primes.reduce((a,b) => a+b);
  }
  
  sumPrimes(20);