// 动态规划 dp
// 不关注具体的实现过程，只关注实现的结果
// 适合使用动态规划
const climbStairs = function (n) {
    const f = [];
    f[1] = 1;
    f[2] = 2;
    // 迭代
    for(let i=3;i<=n;i++){
        f[i] = f[i-1] + f[i-2]
    }
    return f[n];
};
console.log(climbStairs(50));