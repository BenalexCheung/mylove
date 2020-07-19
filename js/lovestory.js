let lovestory = [
    '今夜月色真美',
    '风也很温柔',
];

function randomLovestory(n) {
    document.getElementById('sentence').innerHTML = lovestory[n];
}

randomLovestory(0);
