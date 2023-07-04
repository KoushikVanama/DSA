/**
 * 
 * There are N players, each with strength A[i]. when player i attack player j, player j strength reduces to max(0, A[j]-A[i]). When a player's strength reaches zero, it loses the game, and the game continues in the same manner among other players until only 1 survivor remains.

Can you tell the minimum health last surviving person can have?
 * 
 */
function pubg(A) {
  let n = A.length;
  if (n == 1) return A[0];
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = gcd(ans, A[i]);
  }
  return ans;
}
function gcd(A, B) {
  if (A == 0) return B;
  if (B == 0) return A;
  if (A == 1 || B == 1) return 1;
  if (A > B) return gcd(B % A, A);
  return gcd(A, B % A);
}

console.log(pubg([24, 18, 15, 12, 27, 27, 27, 18]));
