/******************** MENU BTN ********************/

let menuStatus = true;

const menuBtnIcon = document.getElementById("img-btn");

const navContainer = document.getElementById("nav-container");

function menuBtn(input, dir) {

    // Directory
    switch (input) {

        // Close
        case true:

            menuStatus = false;

            navContainer.style.display = "flex"

            // Choose directory of image

            switch (dir) {
                case "same": menuBtnIcon.src = "./assets/icons/exit.svg"; break;
                case "up": menuBtnIcon.src = "../assets/icons/exit.svg"; break;
                case "up2": menuBtnIcon.src = "../../assets/icons/exit.svg"; break;
            }

            break;

        // Open
        case false:

            menuStatus = true;

            navContainer.style.display = "none"

            // Choose directory of image

            switch (dir) {
                case "same": menuBtnIcon.src = "./assets/icons/menu.svg"; break;
                case "up": menuBtnIcon.src = "../assets/icons/menu.svg"; break;
                case "up2": menuBtnIcon.src = "../../assets/icons/menu.svg"; break;
            }

            break;

    }

    // Chack if hide of menu was necessery
    widthSizeChecker();

}

/******************** MENU AUTO SHOW ********************/

// Set selector variable
let widthSize = document.querySelector("#width");

function widthSizeChecker() {

    // If is the size bigger than 1024 px, set it as block
    if (window.innerWidth >= 1024) {

        navContainer.style.display = "block"
        console.log("hello")
    }

}

// Active widthSizeChecker() after resize
window.onresize = widthSizeChecker;

/******************** ALERT ********************/

// thank u chatgpt for this temporary shitty script :3
const alertHTML = `<div class="alert" style="position: fixed; top: 0; left: 0; background: var(--black); padding: 2px 5px; z-index: 999;"><span style="color: var(--grayLight); font-size: 12px;">under development :3</span></div>`;document.body.insertAdjacentHTML('afterbegin', alertHTML);

/******************** TYPING ANIMATION ********************/

// Define animated-heading
const animatedHeading = document.getElementById("animated-heading");

// Define text
const textInAnimation = "welcome to [k4mmi's] ;fancy github portfolio";

function headingAnimation() {

    // Define interval count
    let i = 0;
    
    // Interval
    let intervalAnimation =  setInterval(() => {

        // Add one number to countiog of intervals
        ++i
        
        // Interval stopper
        if (i >= textInAnimation.length) {
            clearInterval(intervalAnimation);
        }

        // Slicing text by count of interval
        let text = textInAnimation.slice(0, i);
        
        // Replace special symbols by html code
        text = text.replace(/\;/g, "<br>");
        text = text.replace(/\[/g, "<mark>");
        text = text.replace(/\]/g, "</mark>");

        // Apply text string into html document
        animatedHeading.innerHTML = text;

    }, 100)

}

window.onload = headingAnimation();
