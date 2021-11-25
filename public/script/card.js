document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelectorAll("div.click")
    const cardc = document.querySelectorAll("div.cont-card")
    const desc = document.querySelectorAll("p.desc")

    
      card[0].addEventListener("mouseover", function (event) {
      cardc[0].classList.remove("hide")
      
      desc[0].classList.remove("hide")})

      card[0].addEventListener("mouseleave", function (event) {
      cardc[0].classList.add("hide")
      
      desc[0].classList.add("hide")})




      card[1].addEventListener("mouseover", function (event) {
      cardc[1].classList.remove("hide")
      desc[1].classList.remove("hide")})
  
      card[1].addEventListener("mouseleave", function (event) {
      cardc[1].classList.add("hide") 
      desc[1].classList.add("hide")})




      card[2].addEventListener("mouseover", function (event) {
      cardc[2].classList.remove("hide")
      desc[2].classList.remove("hide")})
    
      card[2].addEventListener("mouseleave", function (event) {
      cardc[2].classList.add("hide")
      desc[2].classList.add("hide")})

    });
      







      /*const cardjp = document.querySelector(".card.jp")
      const cardcjp = document.querySelector(".cont-card.jp")
      const desc = document.querySelector(".desc.jp")

    cardjp.addEventListener("mouseover", function (event) {
      cardcjp.classList.remove("hide")
    });
    cardjp.addEventListener("mouseleave", function (event) {
        cardcjp.classList.add("hide")
      });


      const cardrj = document.querySelector(".card.rj")
      const cardcrj = document.querySelector(".cont-card.rj")
      const desc = document.querySelector(".desc.rj")

    cardrj.addEventListener("mouseover", function (event) {
      cardcrj.classList.remove("hide")
    });
    cardrj.addEventListener("mouseleave", function (event) {
        cardcrj.classList.add("hide")
      });
*/



/*for ( var i = 0; i < card.length; i++) {
      card[i].addEventListener("mouseover", function (event) {

        
      cardc[0].classList.remove("hide")
  
    });
    }*/