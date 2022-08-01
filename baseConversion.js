const convertFromBaseToAnother = function (number) {
  return function (fromBase) {
    return function (toBase) {
      return parseInt(number, fromBase).toString(toBase);
    };
  };
};

let num;
const fromBase = (f) => {
  return f;
};
const toBase = (t) => {
  return parseInt(num, fromBase).toString(t);
};

const toBinaries = function (number) {
  number = parseInt(number);

  if (isNaN(number)) {
    throw new Error('Entered value should be a number');
  }
  /*
 
   if (number > 65 || number < 1) {
       throw new Error('Entered value should be between 1 and 65');
   }
 */
  var maxValue = Math.pow(2, number) - number;
  let i = 0;
  do {
    let num = maxValue + i;
    let code = num ^ (num >>> 1);
    if (code < 0) {
      code = code >>> 0;
    }

    const convertedCode = convertFromBaseToAnother(code)(10)(2);

    console.log(convertedCode);
    i++;
  } while (i < number);

  /*	
 for (var i = 0; i < number; i++) {
       let num = maxValue + i;
       let code = num ^ (num >>> 1);
       if (code < 0) {
           code = code >>> 0;
       }
       
       const convertedCode = convertFromBaseToAnother(code)(10)(2);
     
       console.log(convertedCode);
   }
 */
};

toBinaries(3);
