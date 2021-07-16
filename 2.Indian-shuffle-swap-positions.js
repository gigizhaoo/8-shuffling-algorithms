// [0, 54)
function randOne(len) {
    return Math.floor(Math.random() * len);
}

function getRandomNums (nums, add) {
    const len = nums.length;
    let randomNums = nums.slice();

    const times = 20;

    for (let i = 0; i < times; i++) {

        let index1 = randOne(len);
        let index2 = randOne(len);

        if (index1 > index2) {
            [index1, index2] = [index2, index1];
        }

        randomNums =
            randomNums.slice(0, index1)
                .concat(randomNums.slice(index2))
                .concat(randomNums.slice(index1, index2));

        add(); // 计算清洗次数

    }

    return randomNums;
}

module.exports = {
    getRandomNums
};