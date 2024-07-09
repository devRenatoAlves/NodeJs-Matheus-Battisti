const _ = require ("lodash");

const a = [1, 2, 3, 4, 5];
const b = [3, 5, 6, 3, 2];

const diff = _.sortedUniq(a,b)

console.log(diff)