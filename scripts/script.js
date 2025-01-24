/******************** CONSOLE ********************/

console.log('%c Welcome in console!!', 'background: #222; color: #FFA9F1');

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

            navContainer.style.display = "flex";
            console.log("yes");

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

            navContainer.style.display = "none";

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

// Set autoHideNav variable
let autoHideNav = false;

function widthSizeChecker() {

    // If is the size bigger than 1024 px, set it as block
    if (window.innerWidth >= 1024) {

        navContainer.style.display = "block";

        autoHideNav = true;
    } else if (window.innerWidth < 1024 && autoHideNav == true){

        navContainer.style.display = "none";
        autoHideNav = false;
    }

}

// Active widthSizeChecker() after resize
window.onresize = widthSizeChecker;

/******************** TYPING ANIMATION ********************/

// Define animated-heading
const animatedHeading = document.getElementById("animated-heading");


// Random cool word generator
function randomCoolWord() {

    // Define random number 0-5
    let randomNum = Math.round(Math.random() * 5);

    // Choose the right word
    switch (randomNum) {
        case 0:
            return "cool";
        case 1:
            return "fancy";
        case 2:
            return "nice";
        case 3:
            return "funny";
        case 4:
            return "uwu";
        case 5:
            return "cute";
    }
}

// Define text
let textInAnimation = `welcome to [k4mmi's] ;${randomCoolWord()} github portfolio`;

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

window.onload = headingAnimation;

// Undertale reference - run in console "undertaleReference()"
function undertaleReference () {
    textInAnimation = "it's a beautiful day outside.;       ;birds are singing, flowers are blooming...;        ;on days like these, kids like you...;            ;[Should be burning in hell.]";
    headingAnimation()
}