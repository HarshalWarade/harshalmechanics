let angle = document.getElementById('angle');
let weight = document.getElementById('weight');
let cof = document.getElementById('cof');
let tension = document.getElementById('tension');
let other = document.getElementById('other');
let up = document.getElementById('up');
let down = document.getElementById('down');
let disWeight = document.getElementById('disWeight');
let disAngle = document.getElementById('disAngle');
let disFriction = document.getElementById('disFriction');
let disTension = document.getElementById('disTension');
let disOther = document.getElementById('disOther');
let disMotion = document.getElementById('disMotion');
let resultUp = document.getElementById('resultUp');
let resultDown = document.getElementById('resultDown');
let hide = document.getElementById('hide');
let resultant = document.getElementById('resultant');
let fetchWeight = document.getElementById('fetchWeight');
let fetchAngle = document.getElementById('fetchAngle');
let thisToo = document.getElementById('thisToo');
let createDiagram = document.getElementById('createDiagram');
let varying = document.getElementById('varying');
let all = document.getElementById('all');
let asl = document.getElementById('asl');
asl.style.visibility = 'hidden';
let fetchExtra = document.getElementById('fetchExtra');
const g = 9.81;
const pi = 3.14;
hide.style.visibility = 'hidden';
thisToo.style.visibility = 'hidden';
let close = document.getElementById('close').addEventListener('click', ()=>{
    asl.style.visibility = 'hidden';
});
createDiagram.style.visibility = 'hidden';
let process = document.getElementById('process').addEventListener('click', () => {
    if ((angle.value && weight.value && cof.value && tension.value) === '') {
        alert("Enter the values first!");
    }
    else{   
        hide.style.visibility = 'visible';
        thisToo.style.visibility = 'visible';
        if(other.value === ''){
            disOther.innerHTML = 0 + ' N';
        }
        disWeight.innerHTML = weight.value + ' N';
        disAngle.innerHTML = angle.value + '°';
        disFriction.innerHTML = cof.value;
        disTension.innerHTML = tension.value + ' N';
        disOther.innerHTML = other.value + ' N';
    }
    if (up.checked) {
        disMotion.innerHTML = 'Upward Motion';
        let x = (angle.value)*Math.PI/180;
        console.log(Math.cos(x));
        console.log(Math.sin(x));
        hide.style.visibility = 'visible';
        createDiagram.style.visibility = 'visible';
        // resultUp.innerHTML = other.value;
        varying.style.transform = `rotateZ(-${angle.value}deg)`;
        let extras = JSON.parse(tension.value) + JSON.parse(other.value);
        fetchExtra.innerHTML = `Total force up the plane: ${extras} N`;
        let calcay = ((weight.value*Math.cos(x)) - weight.value);
                resultDown.innerHTML = calcay;
                let calcax = (JSON.parse(other.value)+JSON.parse(tension.value)) - (JSON.parse(weight.value)*JSON.parse(Math.sin(x)) + (JSON.parse(cof.value)*JSON.parse(weight.value)*JSON.parse(Math.cos(x))));
                let ab = (JSON.parse(weight.value)*JSON.parse(Math.sin(x)) + (JSON.parse(cof.value)*JSON.parse(weight.value)*JSON.parse(Math.cos(x))));
            let na = (JSON.parse(weight.value)*JSON.parse(Math.cos(x)));
            fetchWeight.innerHTML = weight.value + " N";
            fetchAngle.innerHTML = angle.value + " °";
            resultUp.innerHTML = calcax;
            let calcar = Math.sqrt((calcax*calcax)+(calcay*calcay));
            resultant.innerHTML = calcar;
            let fetchEverything = document.getElementById('fetchEverything').addEventListener('click', ()=>{
                asl.style.visibility = 'visible';
                all.innerHTML = `
                
                <ul>
                <li>Weight of the block is: ${weight.value} N</li>
                <li>Forces up the plane: ${extras} N</li>
                <li>Forces down the plane: ${ab} N</li>
                <li>Angle of the inclination: ${angle.value}°</li>
                <li>Coefficient of friction: ${cof.value}</li>
                <li>Tension force: ${tension.value} N</li>
                <li>Other force acting up the plane: ${extras} N</li>
                <li>Normal Reaction: ${na} N</li>
            </ul>`})}
        else if(down.checked){
            hide.style.visibility = 'visible';
            let x = (angle.value)*pi/180;
        console.log(Math.cos(x));
        console.log("Downward motion")
        disMotion.innerHTML = 'Downward Motion';
}})