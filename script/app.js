(function(){

let counter = 0;
let buttons = document.querySelectorAll("button")
let slider = document.querySelector(".my-slider")
let dotWrapper = document.querySelector(".dots")
let array = ["car1.jpg","car2.jpg","car3.jpg","car4.jpg","car5.jpg","car6.jpg"];

let sliderElementStyle = (color, width) => {
    for (let i = 0; i < dots.length; i ++){
        dots[i].setAttribute("style",`background:""; width:""`);
    }

     dots[counter].setAttribute("style",`background:${color}; width:${width}`);

     slider.style.backgroundImage = `url("photo/${array[counter]}")`
}

for (let i = 0; i < array.length; i++){
    let dot = document.createElement("div")
    dot.setAttribute("class","dot")
    dotWrapper.appendChild(dot);
}
let dots = document.querySelectorAll(".dot")




for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click",function(){
        if (dots[i]){
            counter = i;   
        }           
        sliderElementStyle("#3c6efa","25px");
    })
}

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(e){

        if (buttons[i].className === "btn1") {
            counter-- ;
            if (counter < 0) {
                counter = array.length-1 ;
            }
        }
       if (buttons[i].className === "btn2") {
            counter++ ;
            if (counter > array.length - 1) {
                counter = 0 ;
            }
        }

        sliderElementStyle("#3c6efa","25px"); 
    })
}

sliderElementStyle("#3c6efa","25px");

})();






// let counter = 0;
// let button = document.querySelectorAll("button")
// let my-slider = document.querySelector(".my-slider")
// let dotWrapper = document.querySelector(".dots")
// let array = ["car1.jpg","car2.jpg","car3.jpg","car4.jpg","car5.jpg","car6.jpg"];
// for ( let i = 0; i < array.length; i++){
//     let dot = document.createElement("div")
//     dot.setAttribute("class","dot")
//     dotWrapper.appendChild(dot);
// }
// let dots = document.querySelectorAll(".dot")

// for (let i = 0; i < dots.length; i++) {
//     dots[i].addEventListener("click",function(){   
//         dots.forEach(function(dot){
//             dot.style.backgroundColor = "gray"
//         })
//         if (dots[i]){
//             counter = i;
//             dots[counter].style.backgroundColor = "white"
//         }

//         my-slider.style.backgroundImage = `url("photo/${array[counter]}")`
//     })
// }
// // dots.forEach(function(dot){
// //     dot.addEventListener("click",function(){   
// //         for (let i = 0; i < array.length; i ++){
// //             dots[i].style.backgroundColor = "gray";

// //             if (dot === dots[i]){
// //                 counter = i;
// //             }
// //         }

// //         dot.style.backgroundColor = "white";
// //         my-slider.style.backgroundImage = `url("photo/${array[counter]}")`
// //     })
// // })


// button.forEach(function(button){
//     button.addEventListener("click", function(e){

//         if (button.className === "btn1") {
//             counter-- ;
//             if (counter < 0) {
//                 counter = array.length-1 ;
//             }
//         }

//        if (button.className === "btn2") {
//             counter++ ;
//             if (counter > array.length - 1) {
//                 counter = 0 ;
//             }
//         }
        

//         for (let i = 0; i < array.length; i ++){
//             dots[i].style.backgroundColor = "gray";
//         }
//         dots[counter].style.backgroundColor = "white" 

//         my-slider.style.backgroundImage = `url("photo/${array[counter]}")`
//     })
// })

// dots[counter].style.backgroundColor = "white" 



































// let array = [
//     "Football is a simple game. Twenty-two men chase a ball for 90 minutes and at the end, the Germans always win",

//     "I just find myself happy with the simple things. Appreciating the blessings God gave me",

//     "Happiness is an attitude of mind, born of the simple determination to be happy under all outward circumstances",

//     "For every complex problem there is an answer that is clear, simple, and wrong.",

//     "Democracy is the theory that the common people know what they want, and deserve to get it good and hard",

//     "Every normal man must be tempted, at times, to spit on his hands, hoist the black flag, and begin slitting throats",

//     "If, after I depart this vale, you ever remember me and have thought to please my ghost, forgive some sinner and wink your eye at some homely girl"
// ]

// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let counter = 0;
// let array2 = new Array(array.length).fill().map((x,i) => x = i).sort(() => Math.random() -0.5);

// btn.addEventListener("click",function(){
//     counter++;
//     if(counter > array.length-1) {
//         counter = 0;
//         array2 = new Array(array.length).fill().map((x,i) => x = i).sort(() => Math.random() - 0.5);
//     }
//     p.innerText = array[array2[counter]]
//     console.log(array2)
// })







