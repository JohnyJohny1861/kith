let img = document.querySelector('.box-5 img');
let prev = document.querySelector('.lt');
let next = document.querySelector('.gt');
let box9 = document.querySelector('.box-9');

let x = 0;
let dress = {};
let dressDetails = {};

function nextFunc() {
    x = x >= 5 ? x = 0 : x += 1;

    img.classList.remove('appear');
    img.setAttribute('src', `img/${x}.png`);
    img.style.visibility = 'hidden';

    setTimeout(() => {
        img.style.visibility = 'visible';
        img.classList.add('appear');
    }, 10);

    check(x);
    box9.innerHTML = getHTML(dress, dressDetails);
}

function prevFunc() {
    x = x <= 0 ? x = 5 : x -= 1;

    img.classList.remove('appear');  
    img.setAttribute('src', `img/${x}.png`);
    img.style.visibility = 'hidden';

    setTimeout(() => {
        img.style.visibility = 'visible';
        img.classList.add('appear');
    }, 10);

    check(x);
    box9.innerHTML = getHTML(dress, dressDetails);

    
}

let getHTML = (drs, drsDet) => {
    return `
    <h1>
        <span>${drs.type}</span>
        <span>${drs.color}</span>
        <span>Dress</span>
    </h1>
    <p>
        <span>${drsDet.type}</span>
        <span>${drsDet.design}</span>
        <span>Full length: ${drsDet.length} inches</span>
        <span>Width: ${drsDet.width} inches</span>
    </p>    
    `;
}

function check(drsNumber) {
    switch(drsNumber) {
        case 0: {
            dress.type = 'Very Short';
            dress.color = 'Grey';
            dressDetails.type = 'Cotton terry fabric';
            dressDetails.design = 'White dotted'
            dressDetails.length = '30.25';
            dressDetails.width = '25.75';
            break;
        }
        case 1: {
            dress.type = 'Short';
            dress.color = 'Blue';
            dressDetails.type = 'Jenny Jeans fabric';
            dressDetails.design = 'Soft looking'
            dressDetails.length = '34.5';
            dressDetails.width = '27';
            break;
        }
        case 2: {
            dress.type = 'Short';
            dress.color = 'Black White';
            dressDetails.type = 'Cotton F9B';
            dressDetails.design = 'Zebra Design'
            dressDetails.length = '31.4';
            dressDetails.width = '31';
            break;
        }
        case 3: {
            dress.type = 'Very Short';
            dress.color = 'Black';
            dressDetails.type = 'Cotton terry fabric';
            dressDetails.design = 'Soft looking'
            dressDetails.length = '15.2';
            dressDetails.width = '13.5';
            break;
        }
        case 4: {
            dress.type = 'Long';
            dress.color = 'White Brown';
            dressDetails.type = 'Sentetic F9MA';
            dressDetails.design = 'Beauty of Pirat'
            dressDetails.length = '39';
            dressDetails.width = '31.25';
            break;
        }
        case 5: {
            dress.type = 'Short';
            dress.color = 'White Grey';
            dressDetails.type = 'Cotton fabric';
            dressDetails.design = 'Beauty of Softness'
            dressDetails.length = '36';
            dressDetails.width = '25.5';
            break;
        }
    }
}

prev.addEventListener('click', prevFunc);
next.addEventListener('click', nextFunc);

document.body.addEventListener('keyup', function(e) {
    if(e.keyCode === 37) prevFunc();
    if(e.keyCode === 39) nextFunc();
});