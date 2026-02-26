const form = document.querySelector('form');
const result = document.querySelector('#bmi-result');

form.addEventListener('submit',function(e){
    e.preventDefault()
    const h = parseInt(document.querySelector('#height').value)
    const w = parseInt(document.querySelector('#weight').value)
    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
        result.innerHTML = "Please enter valid numbers for height and weight."
    } else {
        const bmi = w / (h/100)**2
        result.innerHTML = `Your BMI is ${bmi.toFixed(2)}`
    }
})