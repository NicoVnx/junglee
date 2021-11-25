

const html = document.querySelector("html")
const checkbox = document.getElementById("switch")

const swDark = document.getElementById("swDark")


const imgUser = document.getElementById("imgUser")
const imgPlant = document.getElementById("imgPlant")
const imgHome = document.getElementById("imgHome")




const btn = document.getElementById("switch")

const getStyle = (element, style) => window.getComputedStyle(element).getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    bgHeader: getStyle(html, "--bg-header"),
    colorTxtHeader: getStyle(html, "--color-txtheader"),
    colorSub: getStyle(html, "--color-sub"),
    colorTxtOne: getStyle(html, "--color-txtone"),
    colorTxtTwo: getStyle(html, "--color-txttwo"),

    preTitle: getStyle(html, "pre-title"),

    colorTxtHomeDest: getStyle(html, "--color-txthomedest"),
    colorBorder: getStyle(html, "--color-border"),
    colorBorderTwo: getStyle(html, "--color-bordertwo"),

    labelN: getStyle(html, "--label-n"),
    labelH: getStyle(html, "--label-h"),
    labelC: getStyle(html, "--label-c"),


    bgFooter: getStyle(html, "--bg-footer"),
    footerTxt: getStyle(html, "--footer-txt"),

    bgHamb: getStyle(html, "--bg-hamb"),

    colorShadow: getStyle(html, "--color-shadow"),
}

const darkMode = {
    bg: "rgb(38, 38, 38)",
    bgHeader: "rgb(52, 46, 41)",
    colorTxtHeader: "rgb(183, 158, 127)",
    
    colorSub: "rgb(147, 134, 118)",
    colorTxtOne: "rgb(235, 192, 167)",
    colorTxtTwo: "rgb(183, 158, 127)",

    preTitle: "rgba(120, 120, 120, 0.82)",

    labelN: "rgb(80, 80, 80)",
    labelH: "rgb(135, 135, 135)",
    labelC: "rgb(210, 210, 210)",

    colorTxtHomeDest: "#88765b",
    colorBorder: "rgb(90, 90, 90)",
    colorBorderTwo: "rgb(50, 50, 50)",
    bgFooter: "rgb(255, 255, 255)",
    footerTxt: "rgb(30, 30, 30)",

    bgHamb: "rgb(25, 25, 25)",

    colorShadow: "rgba(0, 0, 0, 0.650)",
}

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => { Object.keys(colors).map(key => 
        
    html.style.setProperty(transformKey(key), colors[key]))

    
}

checkbox.addEventListener("change", ({target}) => {

    target.checked ? changeColors(darkMode) & Cookies.set('dark', true, { expires: 10000}) &
    swDark.classList.add('swOn') 
    : changeColors(initialColors) & Cookies.remove('dark') & swDark.classList.remove('swOn')
   
})
if(Cookies.get('dark')){
    
    checkbox.checked = true
    swDark.classList.add('swOn') 
    changeColors(darkMode)
}else{

    swDark.classList.remove('swOn')

}

    checkbox.addEventListener("change", ({target}) => {
        target.checked ? imgHome.src = "img/homeW.png" : imgHome.src = "img/home.png"
    target.checked ? imgPlant.src = "img/plantW.png" : imgPlant.src = "img/plant.png"
    target.checked ? imgUser.src = "img/userW.png" : imgUser.src = "img/user.png"
    
    
    

    
   
})




if(Cookies.get('dark')){
    imgHome.src = "img/homeW.png"
imgPlant.src = "img/plantW.png"
    imgUser.src = "img/userW.png"
    
    
}    
    
    

    

    

else{
    imgHome.src = "img/home.png"
    imgPlant.src = "img/plant.png"
    imgUser.src = "img/user.png"
    

    
   

}/**/