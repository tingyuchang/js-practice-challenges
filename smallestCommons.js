function smallestCommons(arr) {
    let minNum = (arr[0] > arr[1])?arr[1]:arr[0];
    let maxNum = (arr[0] > arr[1])?arr[0]:arr[1];
    let sequentialNums = [];
    let primefactors = {};
    let result = 1;
    for(let i = minNum; i <= maxNum; i++) {
      sequentialNums.push(i);
    }
  
  
    let primes = [];
  
    for(let i = 2; i <= maxNum; i ++) {
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
  
    for(let s in sequentialNums) {
      let factors = [];
    
      for(let i in primes) {
        let temp = sequentialNums[s];
        while (temp%primes[i] == 0) {
          factors.push(primes[i]);
          temp = temp/primes[i];
        }
      }
  
      if(factors.length == 0) {
        factors.push(sequentialNums[s]);
      }
  
      primefactors[sequentialNums[s]] = factors;
    };
    
    for(let s in primefactors) {
      let repeatFactor = []
      for(let n in primefactors[s]) {
        if(result%primefactors[s][n] != 0) {
          result = result*primefactors[s][n];
        } else if (result%s != 0) {
          repeatFactor.push(primefactors[s][n]);
        }
        console.log(result);
      }
  
      for(let n in repeatFactor) {
        if(result%s != 0) {
          result = result*repeatFactor[n];
        }
      }
    }
  
    return result;
  }
  
  
  smallestCommons([23,18]);