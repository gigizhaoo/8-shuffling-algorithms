const getRandomNums_1 = require('./1.violent-generation').getRandomNums;
const getRandomNums_2 = require('./2.Indian-shuffle-swap-positions').getRandomNums;
const getRandomNums_3 = require('./3.probability-coverage').getRandomNums;
const getRandomNums_4 = require('./4.Fisher-Yates').getRandomNums;
const getRandomNums_5 = require('./5.Riffle-Shuffle').getRandomNums;

const functionList = [
    getRandomNums_1,
    getRandomNums_2,
    getRandomNums_3,
    getRandomNums_4,
    getRandomNums_5,
];

const nums = new Array(54).fill(0).map((n, i) => i + 1);

// 计算清洗次数
function createCounter() {
    let time = 0;
    return {
        add: () => {
            time++;  
        },
        total: () => {
            return time;
        }
    }
}

functionList.forEach((func, i) => {
    const name = `${func.name}_${i + 1}`;
    const counter = createCounter();
    console.time(`${name}_运行时间`);
    console.log(name, func(nums, counter.add));
    console.timeEnd(`${name}_运行时间`);
    console.log(`${name}_清洗次数:`, counter.total());
    console.log('\n');
});
