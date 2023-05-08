let vst = [];

class NumOfIslands {
  constructor() {}
  solve(A) {
    for (let i = 0; i < A.length; i++) {
      vst.push([]);
    }
    for (let j = 0; j < A.length; j++) {
      for (let k = 0; k < A[0].length; k++) {
        vst[j][k] = 0;
      }
    }
    let ans = 0;
    for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < A[0].length; j++) {
        if (A[i][j] == 1 && vst[i][j] == 0) {
          this.dfs(i, j, A);
          ans++;
        }
      }
    }
    return ans;
  }
  dfs(i, j, A) {
    let dx = [-1, -1, -1, 0, 0, 1, 1, 1];
    let dy = [-1, 0, 1, -1, 1, -1, 0, 1];
    vst[i][j] = 1;
    for (let k = 0; k < 8; k++) {
      let x = i + dx[k];
      let y = j + dy[k];
      if (
        x >= 0 &&
        x < A.length &&
        y >= 0 &&
        y < A[0].length &&
        A[x][y] == 1 &&
        vst[x][y] == 0
      ) {
        this.dfs(x, y, A);
      }
    }
  }
}

const noi = new NumOfIslands();

console.log(
  noi.solve([
    [0, 1, 0],
    [0, 0, 1],
    [1, 0, 0],
  ])
);
console.log(
  noi.solve([
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [1, 0, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1],
  ])
);
