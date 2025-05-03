const burger = document.querySelector(".burger");
const mainNav = document.getElementById("mainNav");

burger.addEventListener("click", () => {
    mainNav.classList.toggle("bg-transparent");
    mainNav.classList.toggle("v-hidden");
    mainNav.querySelector(".main-logo").classList.toggle("opacity-0");
    burger.style.visibility = "visible";
    burger.style.opacity = "1"
});

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// MEGA MENU


document.addEventListener("DOMContentLoaded", function () {
    const rwdMenu = document.querySelector(".rwd-menu");
    const topMenu = document.querySelectorAll(".rwd-menu > li.menu__more__opt > a");
    const parentLi = document.querySelectorAll(".rwd-menu > li.menu__item");
    const backBtn = document.querySelectorAll(".back-btn");

    topMenu.forEach(menuItem => {
        menuItem.addEventListener("click", function (e) {
            e.preventDefault(); // Prevents default anchor behavior

            rwdMenu.classList.add("rwd-menu-view");

            // Remove 'open-submenu' from all menu items
            parentLi.forEach(item => item.classList.remove("open-submenu"));
            parentLi.forEach(item => item.classList.add("v-hidden"));



            // Add 'open-submenu' to the clicked item's parent
            this.parentElement.classList.remove("v-hidden");
            this.parentElement.classList.add("open-submenu");
        });
    });

    backBtn.forEach(btn => {
        btn.addEventListener("click", function () {
            parentLi.forEach(item => item.classList.remove("open-submenu"));
            rwdMenu.classList.remove("rwd-menu-view");
            parentLi.forEach(item => item.classList.remove("v-hidden"));
        });
    });
});