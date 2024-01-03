let count = 0;

function increment() {
    count++;
}

function decrement() {
    count--;
}

function getCount() {
    return count;
}

module.exports = { increment, decrement, getCount };