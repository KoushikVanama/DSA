/**
 * A number can be broken into different consecutive sequence of digits. 
The number 3245 can be broken into sequences like 3, 2, 4, 5, 32, 24, 45, 324 and 245. 
This number is a COLORFUL number, since the product of every consecutive sequence of digits is different
 */
class ColorfulNumber {
  constructor() {}
  solve(A) {
    let a = "" + A;
    var prods = {};
    var csize = 0;
    var code0 = "0".charCodeAt(0);
    while (csize < a.length) {
      for (var i = 0; i + csize < a.length; i++) {
        var cnum = a.slice(i, i + csize + 1);
        var j = -1;
        var prod = 1;
        while (++j < cnum.length) {
          prod *= cnum.charCodeAt(j) - code0;
        }
        // check if the product is unique
        if (prods[prod]) {
          return 0;
        }
        prods[prod] = 1;
      }
      csize++;
    }
    return 1;
  }
}

const sasz = new ColorfulNumber();
console.log(sasz.solve(23));
