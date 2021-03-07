document.getElementById('output').style.visibility = 'hidden';
document.getElementById('lbsInput').addEventListener('input', function (e) {
    // Convert lbs to grams/kilograms/Ounces
    let lbs = e.target.value;
    if (lbs) {
        document.getElementById('output').style.visibility = 'visible';
        document.getElementById('gramsOutput').innerHTML = lbs /0.0022046;
        document.getElementById('kgOutput').innerHTML = lbs /2.2046;
        document.getElementById('ozOutput').innerHTML = lbs * 16;
    } else {
        document.getElementById('output').style.visibility = 'hidden';
    }
})