const coinChange = function (coins, amount){
    const f = []; // 用来存储每个金额对应的最小硬币数
    f[0] = 0; // 初始值：要凑成金额0，需要0个硬币

    for(let i = 1; i <= amount; i++) { // 遍历从1到amount的所有金额
        f[i] = Infinity; // 初始化为无穷大，表示目前无法用给定硬币凑出此金额
        for(let j = 0; j < coins.length; j++) { // 遍历所有硬币面额
            if(i - coins[j] >= 0) { // 如果当前金额大于等于某硬币面额
                f[i] = Math.min(f[i], f[i - coins[j]] + 1); // 更新最小硬币数
            }
        }
    }
    
    return f[amount] === Infinity ? -1 : f[amount];
}
coinChange([1,2,5], 11)