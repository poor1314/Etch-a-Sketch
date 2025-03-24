let container = document.querySelector(".container");
let slider = document.querySelector("#myRange");
let click = false;

// a default grid 4 x 4
function createDefaultGrid(){
    for (let i = 0; i < 16; i++){
        let pixel = document.createElement("div");
        pixel.className = "pixel";  
        container.append(pixel);
    }
}
createDefaultGrid();

function updateSliderNumber(e){
    let getText = document.querySelector(".text")
    getText.textContent = `${e.target.value} x ${e.target.value}`;
}

function getRandomColor() {
    let r = Math.floor(Math.random() * 256); // Random between 0-255
    let g = Math.floor(Math.random() * 256); // Random between 0-255
    let b = Math.floor(Math.random() * 256); // Random between 0-255
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

 // remove whole grid
function clearGrid(){
    container.replaceChildren(); 
}

function createGrid(size){
    const pixelSize = 100/size;
    // if given input is 3, 
    // Math.pow(3, 2) = 9, correctly represent a 3 x 3 grid correctly
    for (let i = 0 ; i < Math.pow(size, 2); i++){

        let pixel = document.createElement("div");
        pixel.className = "pixel";  
        pixel.style.flex = `${pixelSize}%`
        pixel.style.height = `${pixelSize}%`
        container.append(pixel);

    }
}

function updateGrid(e){
    let userSelectedGridSize = Number(e.target.value);
    if (userSelectedGridSize >= 1 && userSelectedGridSize <= 100){
        clearGrid();
        createGrid(userSelectedGridSize);
    }
}

container.addEventListener('click', function(){ 

    click = !click;
    word = document.querySelector("#word");
    if (click === true){
        word.textContent = "stop"
        word.style.color = "red"
    }
    else{
        word.textContent = "draw"
        word.style.color = "blue"
    } 
})

container.addEventListener('mouseover', function(e){
    if (click === true && e.target.className === "pixel" ){
            // gets css property(opacity) of current target 
            opacityValue = Number(window.getComputedStyle(e.target).getPropertyValue("opacity"))
            e.target.style.backgroundColor =  getRandomColor();
            e.target.style.opacity = opacityValue + 0.1;
    }
})

slider.addEventListener("click", updateGrid)
slider.addEventListener("pointermove", updateSliderNumber)
slider.addEventListener("click",updateSliderNumber)









 