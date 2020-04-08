function spinalCase(str) {
    let result = str.split(/(\W|[A-Z]{1}[a-z]{1,})/).filter((x) => {
      let re = /[A-Za-z]/;
      return re.test(x);
    }).map(x => x.toLowerCase()).join("-");
    console.log(result);
    return result;
  }
  
  spinalCase('The_Andy_Griffith_Show');
  
  // spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
  // spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
  // spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
  // spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
  // spinalCase("AllThe-small Things") should return "all-the-small-things".