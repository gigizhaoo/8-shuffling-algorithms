function randOne(from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from; 
}


function getRandomNums (nums, add) {
    const len = nums.length;
    let randomNums = nums.slice(0);

    for (let i = 0; i < len; i++) {
        const randIndex = randOne(i, len - 1);
        [randomNums[randIndex], randomNums[i]] = [randomNums[i], randomNums[randIndex]];
        add(); // 计算清洗次数
    }

    return randomNums;
}

module.exports = {
    getRandomNums
};