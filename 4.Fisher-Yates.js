// [1, 54]
function randOne(len) {
    return Math.floor(Math.random() * len) + 1;
}


function getRandomNums (nums, add) {
    let len = nums.length;
    let randomNums = nums.slice(0);

    while(len > 0) {
        const num = randOne(len);
        const numIndex = randomNums.indexOf(num);
        [randomNums[numIndex], randomNums[len - 1]] = [randomNums[len - 1], randomNums[numIndex]];
        len--;
        add(); // 计算清洗次数
    }

    return randomNums;
}

module.exports = {
    getRandomNums
};