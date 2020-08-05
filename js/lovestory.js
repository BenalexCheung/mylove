let lovestory = [
    '晓看天色暮看云',
    '我爱谢莹',
];

let loveyou = [
    '行也思君，坐也思君',
    '行也思君，坐也思君',
    '行也思君，坐也思君',
    '行也思君，坐也思君',
    '行也思君，坐也思君',
    '行也思君，坐也思君',
    '行也思君，坐也思君',
    '行也思君，坐也思君',
    '行也思君，坐也思君',
    '我爱谢莹',
];

function randomLovestory(n) {
    if (n == 0) {
        document.getElementById('sentence').innerHTML = lovestory[n];
    }
    else {
        document.getElementById('sentence').innerHTML = loveyou[Math.floor(Math.random() * loveyou.length)];
    }
}

randomLovestory(0);
