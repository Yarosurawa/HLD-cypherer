const inputEl = document.getElementById('text-input');
const spaceCBox = document.getElementById('space-cbox')
const textEl = document.getElementById('text')

let tabletWidth = 4;
let tabletHeight = 8;

inputEl.attributes.maxlength = 4*8

inputEl.addEventListener("keyup", ()=>{
    spaceCBox.checked ? text = inputEl.value: text = (inputEl.value).replace(/ /g,'')
    if(spaceCBox.checked && text.length < tabletHeight * tabletWidth) { render()}
    else if (!spaceCBox.checked && text.replace(/ /g,'').length < tabletHeight * tabletWidth) {render()}
})
spaceCBox.addEventListener("change", ()=>{render();})

let array = Array(tabletHeight).fill("");

function render() {    
    let array = Array(tabletHeight).fill("<br>");
    textEl.innerHTML = '<br>'.repeat(tabletHeight)
    
    inputEl.attributes.maxlength = toString(tabletHeight * tabletWidth)
    for (let i = 0; i < text.length; i++) {  
        array[i%tabletHeight] = `${array[i%tabletHeight].slice(0, Math.floor(i/8))}${text[i]}<br>`
        textEl.innerHTML = array.join("").replaceAll(" ", "&nbsp;")
    }
    
}

spaceCBox.checked ? text = inputEl.value: text = (inputEl.value).replace(/ /g,'')
render()