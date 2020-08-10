let lovestory = [
    '好好生活，慢慢爱你。不早不晚，刚好是你。',
    '好好生活，慢慢爱你。不早不晚，刚好是你。',
    '好好生活，慢慢爱你。不早不晚，刚好是你。',
    '好好生活，慢慢爱你。不早不晚，刚好是你。',
    '好好生活，慢慢爱你。不早不晚，刚好是你。',
    '好好生活，慢慢爱你。不早不晚，刚好是你。',
    '好好生活，慢慢爱你。不早不晚，刚好是你。',
    '好好生活，慢慢爱你。不早不晚，刚好是你。',
    '好好生活，慢慢爱你。不早不晚，刚好是你。',
    '我爱你',
];

function randomLovestory() {
        document.getElementById('sentence').innerHTML = lovestory[Math.floor(Math.random() * lovestory.length)];
}

// randomLovestory();
