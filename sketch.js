let container = document.querySelector(".container");
let slider = document.querySelector("#myRange");

// a default grid 16 x 16
function createDefaultGrid(){
    for (let i = 0; i < 16; i++){
        let pixel = document.createElement("div");
        pixel.className = "pixel";  
        container.append(pixel);
    }
}
createDefaultGrid();

function sliderNumber(e){
    let getText = document.querySelector(".text")
    getText.textContent = `${e.target.value} x ${e.target.value}`;
}

function getRandomColor() {
    let r = Math.floor(Math.random() * 256); // Random between 0-255
    let g = Math.floor(Math.random() * 256); // Random between 0-255
    let b = Math.floor(Math.random() * 256); // Random between 0-255
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function newGrid(e){
    let isNumber = Number(e.target.value);
    if (Number.isInteger(isNumber) && isNumber >= 1 && isNumber <= 100){
        // remove whole grid
        container.replaceChildren(); 
    
        const flexValue = 100/isNumber;
        // if given input is 3, 
        // Math.pow(3, 2) = 9, correctly represent a 3 x 3 grid correctly
        for (let i = 0 ; i < Math.pow(isNumber, 2); i++){
            
            let pixel = document.createElement("div");
            pixel.className = "pixel";  
            pixel.style.flex = `${flexValue}%`
            pixel.style.height = `${flexValue}%`
            container.append(pixel);
        }
    }
}


let mouseIsDown = false;
container.addEventListener('mousedown', function(){mouseIsDown = true})
container.addEventListener('mouseup', function(){mouseIsDown = false})
container.addEventListener('mouseout', function(e){
    if (mouseIsDown === true && e.target.className === "pixel" ){
            // gets css property(opacity) of current target 
            opacityValue = Number(window.getComputedStyle(e.target).getPropertyValue("opacity"))
            e.target.style.backgroundColor =  getRandomColor();
        
            // why did incremental only works when i put  opacityValue += 0.1 before  e.target.style.opacity =  opacityValue
            opacityValue += 0.3;
            e.target.style.opacity =  opacityValue;  
    }
})

// two events triggers the same 
slider.addEventListener("click", newGrid)
slider.addEventListener("mouseover",newGrid)
// ["click", "mouseover"].forEach(() => 
//     slider.addEventListener(newGrid)
// );

slider.addEventListener("pointermove", sliderNumber)
slider.addEventListener("click",sliderNumber)
// ["pointermove", "click"].forEach(e => {
//     slider.addEventListener(e, sliderNumber);
// })









 