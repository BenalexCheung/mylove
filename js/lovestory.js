let lovestory = [
    '好好生活，慢慢爱你。不早不晚，刚好是你。',
    '我爱谢莹',
];

function randomLovestory(n) {
        document.getElementById('sentence').innerHTML = lovestory[n];
}

function loadLovestory(n) {
    document.getElementById('weekday').innerHTML = lovestory[n];
}

randomLovestory(0);
