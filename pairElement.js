function pairElement(str) {
    let result = [];
    for(let s in str) {
      switch (str[s]) {
        case "A":
          result.push(["A", "T"]);
          break;
        case "T":
          result.push(["T", "A"]);
          break;
        case "C":
          result.push(["C", "G"]);
          break;
        case "G":
          result.push(["G", "C"]);
          break;
      }
  
  
    }
    return result;
  }
  console.log(pairElement("GCG"));
  