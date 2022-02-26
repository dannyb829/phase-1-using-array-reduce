const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = batteryBatches.reduce((acc, i) => acc += i, 0)

// const reducer = (arr) => {totalBatteries = arr.reduce((acc, i) => acc += i, 0)}