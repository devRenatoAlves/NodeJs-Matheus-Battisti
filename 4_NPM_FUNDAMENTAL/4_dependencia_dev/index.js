const _ = require ("lodash");
const chalk = require ("chalk");

const a = [1, 2, 3, 4, 5];
const b = [3, 5, 6, 3, 2];

const diff = _.difference(a, b);

console.log(chalk.red.bold(diff));