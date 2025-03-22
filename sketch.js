

//when people open the website, there should be a default grid 16 x 16
const container = document.querySelector(".container");
let pixel;

for (let i=0; i < 16; i++){
    pixel = document.createElement("div");
    pixel.className = "pixel";  
    container.append(pixel);
}

// some bug with mouse event
// read more about mouse event
container.addEventListener("mouseover", (e) =>{
    console.log("mouseOver")
    if (e.target.className === "pixel"){
        const randomColor = getRandomColor()
        e.target.style.backgroundColor = randomColor;
        
    }

    let getPixel = document.querySelector(".pixel")
    getPixel.style.opacity = 1;

});

// container.addEventListener("mouseover", () =>{
//         // gets the current opacity value of the pixel

        
//         let getPixel = document.querySelector(".pixel")
//         // let pixelOpacity = window.getComputedStyle(getPixel).getPropertyValue('opacity');
//         // pixelOpacity += 0.1;
//         // getPixel.style.opacity = pixelOpacity

//         // getPixel.style.opacity = '0.1';
//         // opacity = parseFloat(getPixel.style.opacity);
//         // getPixel.style.opacity = opacity + 0.1;
//         getPixel.style.opacity = 1;
// });

document.querySelector(".button").addEventListener("click", () => {
   
    const input = document.querySelector(".input");
    
    // console.log("the input is:",input.value)
    // console.log(typeof(Number(input.value)))

    const isNumber = Number(input.value)
    
    if (Number.isInteger(isNumber) && isNumber >= 1 && isNumber <= 99){
        console.log("If-statement has passed");

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

        // prompt user to use an integer
        }else console.log("try again!");


    input.value = "";
    input.focus();
    
});

function getRandomColor() {
    let r = Math.floor(Math.random() * 256); // Random between 0-255
    let g = Math.floor(Math.random() * 256); // Random between 0-255
    let b = Math.floor(Math.random() * 256); // Random between 0-255
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}






 