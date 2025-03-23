

//when people open the website, there should be a default grid 16 x 16
const container = document.querySelector(".container");
const slider = document.querySelector("#myRange");

for (let i = 0; i < 16; i++){
    let pixel = document.createElement("div");
    pixel.className = "pixel";  
    container.append(pixel);
}

container.addEventListener("mouseover", (e) =>{
    
    // gets css property(opacity) of current target 
    opacityValue = Number(window.getComputedStyle(e.target).getPropertyValue("opacity"))
   
    if (e.target.className === "pixel"){
        const randomColor = getRandomColor()
        e.target.style.backgroundColor = randomColor;
    
        // why did incremental only works when i put  opacityValue += 0.1 before  e.target.style.opacity =  opacityValue
        opacityValue += 0.3;
        e.target.style.opacity =  opacityValue;
    }
});



function newGrid(e){
    const isNumber = Number(e.target.value);
    if (Number.isInteger(isNumber) && isNumber >= 1 && isNumber <= 100){
        // remove whole grid
        let parent = document.querySelector(".container");
        parent.replaceChildren(); 
        

        const flexValue = 100/isNumber;
        // Math.pow(isNumber, 2)
        // if given input is 3, 
        // Math.pow(3, 2) = 9, correctly represent a 3 x 3 grid
        for (let i = 0 ; i < Math.pow(isNumber, 2); i++){
            
            let pixel = document.createElement("div");
            pixel.className = "pixel";  
            pixel.style.flex = `${flexValue}%`
            pixel.style.height = `${flexValue}%`
            container.append(pixel);
        }
    }
}

// two events triggers the same 

// slider.addEventListener("click",newGrid)
// slider.addEventListener("mouseover",newGrid)
["click", "mouseover"].forEach(e => {
    slider.addEventListener(e, newGrid);
})



function sliderNumber(e){
    const getText = document.querySelector(".text")
    getText.textContent = `${e.target.value} x ${e.target.value}`;
}


["pointermove", "click"].forEach(e => {
    slider.addEventListener(e, sliderNumber);
})



function getRandomColor() {
    let r = Math.floor(Math.random() * 256); // Random between 0-255
    let g = Math.floor(Math.random() * 256); // Random between 0-255
    let b = Math.floor(Math.random() * 256); // Random between 0-255
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}






 