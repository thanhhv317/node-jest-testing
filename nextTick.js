console.log('Start');


process.nextTick(() => {
    console.log("Called nextTick");
})

console.log("Scheduled")