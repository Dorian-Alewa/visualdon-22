function domForEach(selector, callback) {
    document.querySelectorAll(selector).forEach(callback);
}

function domOn(selector, event, callback) { // va ajouter des PARAMèTRES SUPPLéMENTAIRES au callback qui sera addEventListener
    domForEach(selector, element => element.addEventListener(event, callback));
}

domOn('.rectangle','click', evt =>{
const monRectangle = evt.target
const couleur = monRectangle.getAttribute('fill')
if(couleur == 'red'){
    monRectangle.setAttribute('fill', 'green')
} else {
    monRectangle.setAttribute('fill', 'red');

}
} )

domOn('.donut','mouseover', evt =>{
    const monDonut = evt.target
    const rayon = monDonut.getAttribute('r')
    if(rayon <= 60){
        monDonut.setAttribute('r', rayon*2)
    } else {
        monDonut.setAttribute('r', rayon*0.5);
    
    }
    } )


