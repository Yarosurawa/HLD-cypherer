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
const borderImg = document.querySelector('.tablet-image');
const tabletStyleSelect = document.getElementById('tablet-style-select')
const borderCBox = document.getElementById('border-cbox');

class TabletStyle {
    constructor(img, x, y, w, h, xMin, yMin, xMax, yMax, mt, ml) {
        this.x = x, this.yMax = yMax,
        this.y = y, this.yMin = yMin, 
        this.w = w, this.xMax = xMax,
        this.h = h, this.xMin = xMin,
        this.mt = mt, this.ml = ml,
        this.img0 = img[0]
        this.img1 = img[1]
        this.img2 = img[2]
        this.img3 = img[3]
        this.img4 = img[4]
    }
}

const tabletStyles = [
    new TabletStyle([""], 0, 0, 0, 0, 1, 1, 16, 16, 0, 0),
    new TabletStyle(["./img/frame1.png"], 75, 90, 180, 245, 4, 8, 4, 8, 52.5, 45)
]

currentTabletStyle = tabletStyleSelect.value
let tabletWidth = parseInt(widthInput.value);
let tabletHeight = parseInt(heightInput.value);

let AddedWidth = tabletStyles[currentTabletStyle].x;
let AddedHeight = tabletStyles[currentTabletStyle].y;

[heightInput, heightInputNum, widthInput, widthInputNum].forEach(input => {input.addEventListener('input', ()=>{changeSize()})});

function changeSize() {
    heightInput.attributes["max"].value = tabletStyles[currentTabletStyle].yMax
    widthInput.attributes["max"].value = tabletStyles[currentTabletStyle].xMax
    heightInput.attributes["min"].value = tabletStyles[currentTabletStyle].yMin
    widthInput.attributes["min"].value = tabletStyles[currentTabletStyle].xMin

    borderImg.width = tabletStyles[currentTabletStyle].w
    borderImg.height = tabletStyles[currentTabletStyle].h
    borderImg.src = tabletStyles[currentTabletStyle].img0

    heightInputNum.value = heightInput.value;
    heightInput.value = heightInputNum.value;

    widthInputNum.value = widthInput.value;
    widthInput.value = widthInputNum.value;
    tabletWidth = parseInt(widthInput.value)
    tabletHeight = parseInt(heightInput.value);

    let AddedWidth = tabletStyles[currentTabletStyle].x;
    let AddedHeight = tabletStyles[currentTabletStyle].y;
    textEl.style.width = `${tabletWidth*25 - 1}px`
    textEl.style.height = `${tabletHeight*20 - 1}px`
    textEl.style.marginLeft = `${tabletStyles[currentTabletStyle].ml}px`;
    textEl.style.marginTop = `${tabletStyles[currentTabletStyle].mt}px`;
    document.querySelector('.tablet').style.width = `${tabletWidth*25 + AddedWidth}px`
    document.querySelector('.tablet').style.height = `${tabletHeight*20 + AddedHeight}px`
    render();
}

inputEl.addEventListener("input", ()=>{
    spaceCBox.checked ? text = inputEl.value: text = (inputEl.value).replace(/ /g,'')
    if(spaceCBox.checked && text.length <= tabletHeight * tabletWidth) {render()}
    else if (!spaceCBox.checked && text.replace(/ /g,'').length <= tabletHeight * tabletWidth) {render()}
})
spaceCBox.addEventListener("input", ()=>{render();})

let array = Array(tabletHeight).fill("");

function render() {    
    console.log('render');
    spaceCBox.checked ? text = inputEl.value: text = (inputEl.value).replace(/ /g,'')
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

borderCBox.checked = true;
borderCBox.addEventListener("change", ()=>{borderCBox.checked === true? document.querySelector('.result').classList.remove("hidden") : document.querySelector('.result').classList.add("hidden")})

tabletStyleSelect.addEventListener("input", ()=>{
    currentTabletStyle = tabletStyleSelect.value
    changeSize()
})


render();
changeSize();