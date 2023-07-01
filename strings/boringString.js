function boringString(A) {
  let n = A.length;
  let oddStr = "";
  let evenStr = "";
  for (let i = 0; i < n; i++) {
    if (A[i].charCodeAt(0) % 2 == 0) {
      oddStr += A[i];
    } else {
      evenStr += A[i];
    }
  }
  oddStr = oddStr.split("").sort().join("");
  evenStr = evenStr.split("").sort().join("");
  if (check(oddStr + evenStr)) return 1;
  if (check(evenStr + oddStr)) return 1;
  return 0;
}
function check(s) {
  let ok = true;
  for (let i = 1; i < s.length; i++) {
    ok &= Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1)) != 1;
  }
  return ok;
}

console.log(boringString("wwuvuw")); //  0
console.log(boringString("abcd")); //  1
console.log(boringString("aab")); //  0
