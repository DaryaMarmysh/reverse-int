module.exports = function reverse (n) {
    n=Array.from((Math.abs(n)).toString());
    n=n.reverse();
    return Number(n.join(''));
  
}
