/******************** MENU BTN ********************/

let menuStatus = true;

const menuBtnIcon = document.getElementById("img-btn")

const navContainer = document.getElementById("nav-container")

function menuBtn(input, dir) {

    // Directory
    switch (input) {

        case true:

            menuStatus = false;

            navContainer.style.display = "flex"

            switch (dir) {
                case "same": menuBtnIcon.src = "./assets/icons/exit.svg"
                case "up": menuBtnIcon.src = "../assets/icons/exit.svg"
            }

            break;

        case false:

            menuStatus = true;

            navContainer.style.display = "none"

            switch (dir) {
                case "same": menuBtnIcon.src = "./assets/icons/menu.svg";
                case "up": menuBtnIcon.src = "../assets/icons/menu.svg";
            }

            break;

    }

}

