const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}

// var orangeElementColor = getBGColor(orange);
//
// orange.addEventListener('mouseenter', () => {
//     center.style.background = orangeElementColor;
// })
//
// pink.addEventListener('click', () => {
//     center.style.background = getBGColor(pink);
// })

const magicColorChanger = (colorArr) => {
    colorArr.forEach((color) => {
        return color.addEventListener("mouseenter", ()=>{
            center.style.background = getBGColor(color);
        })
    })
}

magicColorChanger([red, cyan, violet, orange, pink]);