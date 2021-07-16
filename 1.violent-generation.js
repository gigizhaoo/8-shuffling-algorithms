// [1, 54]
function randOne(len) {
    return Math.floor(Math.random() * len) + 1;
}


function getRandomNums (nums, add) {
    const len = nums.length;
    let randomNums = [];

    while(randomNums.length < len) {
        const num = randOne(len);
        if (randomNums.indexOf(num) === -1) {
            randomNums.push(num);
        }
        add(); // 计算清洗次数
    }

    return randomNums;
}

module.exports = {
    getRandomNums
};