

//when people open the website, there should be a default grid 16 x 16
const container = document.querySelector(".container");
let pixel;

for (let i=0; i < 16; i++){
    pixel = document.createElement("div");
    pixel.className = "pixel";  
    container.append(pixel);
    // console.log(i)
   
}

container.addEventListener("mouseover", (e) =>{
    // console.log("mouse over!") 
    // can also add a new class for color changes
    // e.target.setAttribute('style','color:red;background-color:yellow');
    e.target.classList.add('colorChange');
    // console.log(e.target)
});


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








