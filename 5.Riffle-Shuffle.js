function getRandomNums (nums, add) {
    const len = nums.length;
    const mid = len / 2;
    const times = 7;
    let randomNums = nums.slice(0);

    for (let i = 0; i < times; i++) {
        let tempNums = [];

        for (let j = 0; j < mid; j++) {
            tempNums.push(randomNums[j]);
            tempNums.push(randomNums[j + mid]);
        }
        randomNums = tempNums;
        
        add(); // 计算清洗次数
    }

    return randomNums;
}

module.exports = {
    getRandomNums
};