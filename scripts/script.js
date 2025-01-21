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
                case "same": menuBtnIcon.src = "./assets/icons/exit.svg"
                case "up": menuBtnIcon.src = "../assets/icons/exit.svg"
                case "up2": menuBtnIcon.src = "../../assets/icons/exit.svg"
            }

            break;

        // Open
        case false:

            menuStatus = true;

            navContainer.style.display = "none"

            // Choose directory of image

            switch (dir) {
                case "same": menuBtnIcon.src = "./assets/icons/menu.svg";
                case "up": menuBtnIcon.src = "../assets/icons/menu.svg";
                case "up2": menuBtnIcon.src = "../../assets/icons/menu.svg";
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

/******************** ALERT (thank u chatgpt for this temporary shitty script :3) ********************/

const alertHTML = `<div class="alert" style="position: fixed; top: 0; left: 0; background: var(--black); padding: 2px 5px; z-index: 999;"><span style="color: var(--grayLight); font-size: 12px;">under development :3</span></div>`;document.body.insertAdjacentHTML('afterbegin', alertHTML);