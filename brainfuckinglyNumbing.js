const inputEl = document.getElementById('text-input');
const spaceCBox = document.getElementById('space-cbox')
const textEl = document.getElementById('text')

let tabletWidth = 4;
let tabletHeight = 8;

inputEl.addEventListener("keyup", (e)=>{render();})
spaceCBox.addEventListener("change", (e)=>{render();})

let array = Array(tabletHeight).fill("");

function render() {
    spaceCBox.checked ? text = inputEl.value: text = (inputEl.value).replace(/ /g,'')
    
    
    let array = Array(tabletHeight).fill("<br>");
    textEl.innerHTML = '<br>'.repeat(tabletHeight)
    
    inputEl.attributes.maxlength = toString(tabletHeight * tabletWidth)
    for (let i = 0; i < text.length; i++) {  
        array[i%tabletHeight] = `${array[i%tabletHeight].slice(0, Math.floor(i/8))}${text[i]}<br>`
        textEl.innerHTML = array.join("").replaceAll(" ", "&nbsp;")
    }
    
}

render()