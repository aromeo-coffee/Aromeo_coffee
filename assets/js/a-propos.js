const counte1 = document.querySelector('.counter1');
const counte2 = document.querySelector('.counter2');

let counternumber1 = 0;
let counternumber2 = 0;

const max1 = 15;
const max2 = 98.99;
const totalSteps = 200; // how many steps to reach the final value
const increment1 = max1 / totalSteps;
const increment2 = max2 / totalSteps;

let step = 0;

const updatecounter = setInterval(function () {
    step++;

    counternumber1 += increment1;
    counternumber2 += increment2;

    if (step >= totalSteps) {
        counternumber1 = max1;
        counternumber2 = max2;
        clearInterval(updatecounter);
        counte1.style.color = 'rgb(82, 82, 55)';
        counte2.style.color = 'rgb(82, 82, 55)';
    }

    counte1.textContent = `${Math.floor(counternumber1)} +`;
    counte2.textContent = `${counternumber2.toFixed(2)} %`;
}, 20); // animation duration: totalSteps * interval (≈ 4s here)
