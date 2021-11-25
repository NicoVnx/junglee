window.addEventListener("scroll", function(){

    const header = document.querySelector("header")
    header.classList.toggle("shadow", window.scrollY > 0)

})