const inputEl = document.getElementById('text-input');
const spaceCBox = document.getElementById('space-cbox')
const textEl = document.getElementById('text')

if (navigator.userAgent.includes("Firefox")) {
  document.body.classList.add("firefox");
} else if (navigator.userAgent.includes("Chrome")) {
  document.body.classList.add("chrome");
} else if (navigator.userAgent.includes("Safari")) {
  document.body.classList.add("safari");
}

const heightInput = document.getElementById('height-input');
const heightInputNum = document.getElementById('height-input-num');
const widthInput = document.getElementById('width-input');
const widthInputNum = document.getElementById('width-input-num');


let tabletWidth = parseInt(widthInput.value);
let tabletHeight = parseInt(heightInput.value);

[heightInput, heightInputNum, widthInput, widthInputNum].forEach(input => {input.addEventListener('input', ()=>{changeSize()})});

function changeSize() {
    heightInputNum.value = heightInput.value;
    heightInput.value = heightInputNum.value;
    widthInputNum.value = widthInput.value;
    widthInput.value = widthInputNum.value;
    tabletWidth = parseInt(widthInput.value)
    tabletHeight = parseInt(heightInput.value);

    document.querySelector('.tablet').style.width = `${tabletWidth*40 + 25}px`
    document.querySelector('.tablet').style.height = `${tabletHeight*25 + 60}px`
    render();
}

inputEl.addEventListener("input", ()=>{
    spaceCBox.checked ? text = inputEl.value: text = (inputEl.value).replace(/ /g,'')
    if(spaceCBox.checked && text.length <= tabletHeight * tabletWidth) {render()}
    else if (!spaceCBox.checked && text.replace(/ /g,'').length <= tabletHeight * tabletWidth) {render()}
})
spaceCBox.addEventListener("change", ()=>{render();})

let array = Array(tabletHeight).fill("");

function render() {    
    let array = Array(tabletHeight).fill("<br>");
    textEl.innerHTML = '<br>'.repeat(tabletHeight)
    
    inputEl.attributes.maxlength = toString(tabletHeight * tabletWidth)
    for (let i = 0; i < text.length; i++) {  
        array[i%tabletHeight] = `${array[i%tabletHeight].slice(0, Math.floor(i/tabletHeight))}${text[i]}<br>`
        textEl.innerHTML = array.join("").replaceAll(" ", "&nbsp;")
    }
    
}

spaceCBox.checked ? text = inputEl.value: text = (inputEl.value).replace(/ /g,'')
if(spaceCBox.checked && text.length <= tabletHeight * tabletWidth) { render()}
else if (!spaceCBox.checked && text.replace(/ /g,'').length <= tabletHeight * tabletWidth) {render()}




const borderImg = document.querySelector('.tablet-image');
const borderCBox = document.getElementById('border-cbox');
borderCBox.checked = true;

borderCBox.addEventListener("change", ()=>{
    if (borderCBox.checked) {
        document.querySelector(".tablet").style.height = "245px"
        borderImg.style.opacity = 1;
        textEl.style.scale = 1;
    } else {
        document.querySelector(".tablet").style.height = "260px"
        borderImg.style.opacity = 0;
        textEl.style.scale = 1.5;
    }
    
})