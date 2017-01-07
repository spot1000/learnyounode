var arr = process.argv.slice(2);

console.log( arr.reduce(function(a,b) {
    return parseInt(a)+parseFloat(b);
})
);