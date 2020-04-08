function convertHTML(str) {
    let re = /[&<>"']/g;
    return str.replace(re, (x) => {
      let result= "";
      switch(x) {
        case("&"):
          result = "&amp;";
          break;
        case("<"):
          result = "&lt;";
          break;
        case(">"):
          result = "&gt;";
          break;
        case("\""):
          result = "&quot;";
          break;
        case("\'"):
          result = "&apos;";
          break;
      }
      return result;
    });
  }
  
  console.log(convertHTML("Dolce & Gabbana"));
  