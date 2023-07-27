# Convert to Roman 

Convert decimal to roman numerals and vice versa


## Features

- Roman to decimal
- Decimal to Roman
- Loop through roman numerals
- Easy implementation


## Installation

Install my-project with npm

```bash
  npm install convert-to-roman
```
    
## Usage/Examples

```javascript
const convert = require('convert-to-roman')

var decimal = convert.toDecimal("DCLVII")
console.log(decimal);
// output 657


var roman = convert.toRoman(2023)
console.log(roman);
// output MMXXIII


convert.loop(10,50,5)
    // 10 = start value
    // 50 = end value
    // 5 = increment value
// output X XV XX XXV XXX XXXV XL XLV L

```

