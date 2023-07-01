function reverseTheString(A) {
  //   return A.split(" ").reverse().join(" ");
  let string = [];
  let word = "";
  for (let i = 0; i < A.length; i++) {
    if (A[i] != " ") {
      word += A[i];
    } else {
      string.push(word);
      word = "";
    }
  }
  string.push(word);
  let resultString = "";
  while (string.length > 0) {
    resultString += string.pop();
    if (string.length === 0) continue;
    resultString += " ";
  }
  return resultString;
}

console.log(reverseTheString("the sky is blue")); // "blue is sky the"
console.log(reverseTheString("this is ib")); // "ib is this"
