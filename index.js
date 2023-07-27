function convetToRoman(num) {
  var ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  var thousands = ["", "M", "MM", "MMM"];
  if (num > 3999 || typeof num !== "number") {
    throw new Error("Number dosen't exist in Roman numerals");
  }
  return (
    thousands[Math.floor(num / 1000)] +
    hundreds[Math.floor((num % 1000) / 100)] +
    tens[Math.floor((num % 100) / 10)] +
    ones[Math.floor(num % 10)]
  );
}

module.exports.toRoman = function (value) {
  try {
    return convetToRoman(value);
  } catch (err) {
    var error = err.name + ":" + err.message;
    return error;
  }
};

module.exports.toDecimal = function (string) {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  var newString = string.toUpperCase();
  validate(newString);

  var integer = 0;
  for (var i = 0; i < string.length; i++) {
    if (
      i + 1 < string.length &&
      romanValues[newString[i]] < romanValues[newString[i + 1]]
    ) {
      integer -= romanValues[newString[i]];
    } else {
      integer += romanValues[newString[i]];
    }
  }
  if (integer < 4000) {
    return integer;
  } else {
    throw Error("Number dosen't exist in Roman numeral");
  }
  function validate(string) {
    if (!string) {
      throw Error("The parameter value provided is not valid");
    }
    for (var i = 0; i < string.length; i++) {
      if (!romanValues[string[i]]) {
        throw Error("Invalid parameter");
      }
    }
  }
};

module.exports.loop = function (start, end, increment = 1) {
  for (var i = start; i <= end; i = i + increment) {
    console.log(this.toRoman(i));
  }
};
