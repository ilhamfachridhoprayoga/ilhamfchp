const navslide = () => {
    const burger = document.querySelector(".burger");
    const Navlists = document.querySelector("nav");

    burger.addEventListener("click", () => {
        Navlists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    })
};

navslide();

window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};