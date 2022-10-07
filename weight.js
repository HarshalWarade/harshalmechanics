let wa = document.getElementById('wa');
let wb = document.getElementById('wb');
let w1 = document.getElementById('w1');
let w2 = document.getElementById('w2');
let koi = document.getElementById('koi');
let hide = document.getElementById('hide');
hide.style.visibility = 'hidden';
let btn = document.getElementById('btn').addEventListener('click', ()=>{
    wa.innerHTML = w1.value+"N";
    wb.innerHTML = w2.value+"N";
    if(w1.value>w2.value){
        hide.style.visibility = 'visible';
        console.log(w1.value+' is greater!');
        koi.style.background = 'url(agreater.png)';
        koi.style.backgroundPosition = 'center';
        koi.style.backgroundSize = 'cover';
        wa.style.top = '340px';
        wb.style.top = '255px';
        wa.style.left = '199px';
        wb.style.left = '290px';
    }
    else if(w1.value == w2.value){
        console.log('Both weights are equal');
        hide.style.visibility = 'hidden';
        alert(`Both weights are equal!`);
    }
    else{
        wa.style.top = '268px';
        hide.style.visibility = 'visible';
        wb.style.top = '320px';
        wa.style.left = '174px';
        wb.style.left = '265px';
        koi.style.background = 'url(bgreater.png)';
        koi.style.backgroundPosition = 'center';
        koi.style.backgroundSize = 'cover';
        console.log(w2.value+" is greater!");
    }
});